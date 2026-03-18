import { generateHmacHeaders } from './hmac-auth.js';
/**
 * Register the HMAC authentication interceptor on a @hey-api/client-fetch client.
 *
 * Every outgoing request will have Date, Authorization, and (for requests with
 * a body) Digest headers added automatically.
 */
export function registerHmacInterceptor(client, config) {
    client.interceptors.request.use(async (request) => {
        const url = new URL(request.url);
        const requestPath = url.pathname + url.search;
        const method = request.method.toUpperCase();
        const body = request.body ? await request.clone().text() : undefined;
        const hmacHeaders = generateHmacHeaders(config, method, requestPath, body);
        request.headers.set('Date', hmacHeaders.Date);
        request.headers.set('Authorization', hmacHeaders.Authorization);
        if (hmacHeaders.Digest) {
            request.headers.set('Digest', hmacHeaders.Digest);
        }
        return request;
    });
}
//# sourceMappingURL=interceptor.js.map