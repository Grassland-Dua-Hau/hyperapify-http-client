import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";

const swaggerUrl = [
  "https://gate.hyperapify.com/docs/video-hub/json",
  "https://gate.hyperapify.com/docs/fdb-hub/json",
];

const schemas = await Promise.all(
  swaggerUrl.map(async (url) => {
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    return res.json();
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
