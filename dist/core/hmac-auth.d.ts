import type { HyperapifyConfig } from './types.js';
export interface HmacHeaders {
    readonly Date: string;
    readonly Authorization: string;
    readonly Digest?: string;
}
/**
 * Generate all HMAC authentication headers for a request.
 *
 * @param config - keyId and secretKey credentials
 * @param method - HTTP method (GET, POST, etc.)
 * @param requestPath - URL path including query string
 * @param body - Optional request body (triggers Digest header)
 */
export declare function generateHmacHeaders(config: HyperapifyConfig, method: string, requestPath: string, body?: string): HmacHeaders;
//# sourceMappingURL=hmac-auth.d.ts.map