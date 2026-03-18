import { generateHmacHeaders } from './hmac-auth.js'
import type { HyperapifyConfig } from './types.js'

interface InterceptableClient {
  interceptors: {
    request: {
      use(fn: (request: Request) => Request | Promise<Request>): number
    }
  }
}

/**
 * Register the HMAC authentication interceptor on a @hey-api/client-fetch client.
 *
 * Every outgoing request will have Date, Authorization, and (for requests with
 * a body) Digest headers added automatically.
 */
export function registerHmacInterceptor(
  client: InterceptableClient,
  config: HyperapifyConfig
): void {
  client.interceptors.request.use(async (request) => {
    const url = new URL(request.url)
    const requestPath = url.pathname + url.search
    const method = request.method.toUpperCase()

    const body = request.body ? await request.clone().text() : undefined
    const hmacHeaders = generateHmacHeaders(config, method, requestPath, body)

    request.headers.set('Date', hmacHeaders.Date)
    request.headers.set('Authorization', hmacHeaders.Authorization)
    if (hmacHeaders.Digest) {
      request.headers.set('Digest', hmacHeaders.Digest)
    }

    return request
  })
}
