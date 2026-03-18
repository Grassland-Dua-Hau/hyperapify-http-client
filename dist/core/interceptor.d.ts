import type { HyperapifyConfig } from './types.js';
interface InterceptableClient {
    interceptors: {
        request: {
            use(fn: (request: Request) => Request | Promise<Request>): number;
        };
    };
}
/**
 * Register the HMAC authentication interceptor on a @hey-api/client-fetch client.
 *
 * Every outgoing request will have Date, Authorization, and (for requests with
 * a body) Digest headers added automatically.
 */
export declare function registerHmacInterceptor(client: InterceptableClient, config: HyperapifyConfig): void;
export {};
//# sourceMappingURL=interceptor.d.ts.map