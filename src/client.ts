import { client as apiClient } from './api/client.gen.js'
import * as sdk from './api/sdk.gen.js'
import { registerHmacInterceptor } from './core/interceptor.js'
import { createLogger, type Logger } from './core/logger.js'
import type { HyperapifyConfig } from './core/types.js'
import { buildServiceMap, type ServiceMap } from './services/registry.js'
import { SDK_URL_MAP } from './services/url-map.js'

export interface HyperapifyClientOptions {
  readonly keyId: string
  readonly secretKey: string
  readonly baseUrl?: string
}

let instance: HyperapifyClient | undefined

export class HyperapifyClient {
  private readonly logger: Logger
  private serviceMap: ServiceMap | undefined

  private constructor(options: HyperapifyClientOptions) {
    this.logger = createLogger()

    if (options.baseUrl) {
      apiClient.setConfig({ baseUrl: options.baseUrl })
    }

    const config: HyperapifyConfig = {
      keyId: options.keyId,
      secretKey: options.secretKey,
    }
    registerHmacInterceptor(apiClient, config)
  }

  static create(options: HyperapifyClientOptions): HyperapifyClient {
    if (instance) {
      throw new Error(
        'HyperapifyClient is already initialized. Use HyperapifyClient.getInstance().'
      )
    }
    instance = new HyperapifyClient(options)
    return instance
  }

  static getInstance(): HyperapifyClient {
    if (!instance) {
      throw new Error('HyperapifyClient is not initialized. Call HyperapifyClient.create() first.')
    }
    return instance
  }

  /**
   * Reset the singleton instance. Intended for testing only.
   */
  static resetInstance(): void {
    instance = undefined
  }

  private getServices(): ServiceMap {
    if (!this.serviceMap) {
      this.serviceMap = buildServiceMap(
        sdk as unknown as Record<string, (...args: never[]) => unknown>,
        SDK_URL_MAP,
        this.logger
      )
    }
    return this.serviceMap
  }

  /**
   * Access a domain service by name.
   *
   * @example
   * const tiktok = client.service('tiktok')
   * await tiktok.fetchPostDetail({ query: { aweme_id: '123' } })
   */
  service(domain: string): Record<string, (...args: never[]) => unknown> {
    const services = this.getServices()
    const domainService = services[domain]
    if (!domainService) {
      throw new Error(
        `Unknown service domain: "${domain}". Available: ${Object.keys(services).join(', ')}`
      )
    }
    return domainService
  }

  get domains(): string[] {
    return Object.keys(this.getServices())
  }
}
