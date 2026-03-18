import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

const swaggerUrl = [
  { url: "https://gate.hyperapify.com/docs/video-hub/json", pathPrefix: "/video-hub" },
  { url: "https://gate.hyperapify.com/docs/fdb-hub/json", pathPrefix: "/fdb-hub" },
];

function prefixPaths(
  paths: Record<string, unknown>,
  prefix: string,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(paths).map(([path, value]) => [`${prefix}${path}`, value]),
  );
}

const schemas = await Promise.all(
  swaggerUrl.map(async ({ url, pathPrefix }) => {
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    const schema = await res.json();
    if (pathPrefix && schema.paths) {
      schema.paths = prefixPaths(schema.paths, pathPrefix);
    }
    return schema;
  }),
);

const mergedSchema = schemas.reduce(
  (merged, schema) => ({
    openapi: merged.openapi || schema.openapi,
    info: merged.info || schema.info,
    paths: { ...merged.paths, ...schema.paths },
    components: {
      ...merged.components,
      ...schema.components,
      schemas: {
        ...merged.components?.schemas,
        ...schema.components?.schemas,
      },
      securitySchemes: {
        ...merged.components?.securitySchemes,
        ...schema.components?.securitySchemes,
      },
    },
    tags: [...(merged.tags || []), ...(schema.tags || [])],
    servers: merged.servers || schema.servers,
  }),
  {} as Record<string, unknown>,
);

export default defineConfig({
  input: mergedSchema,
  output: {
    path: "./src/api",
    postProcess: ["prettier", "biome:lint"],
  },
  plugins: [
    ...defaultPlugins,
    {
      name: "@hey-api/client-fetch",
    },
  ],
});
