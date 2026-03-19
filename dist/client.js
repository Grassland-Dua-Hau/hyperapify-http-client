import { client as apiClient } from './api/client.gen.js';
import * as sdk from './api/sdk.gen.js';
import { registerHmacInterceptor } from './core/interceptor.js';
import { createLogger } from './core/logger.js';
import { buildServiceMap } from './services/registry.js';
import { SDK_URL_MAP } from './services/url-map.js';
let instance;
export class HyperapifyClient {
    logger;
    serviceMap;
    constructor(options) {
        this.logger = createLogger();
        apiClient.setConfig({ baseUrl: options.baseUrl ?? 'https://gate.hyperapify.com' });
        const config = {
            keyId: options.keyId,
            secretKey: options.secretKey,
        };
        registerHmacInterceptor(apiClient, config);
    }
    static create(options) {
        if (instance) {
            throw new Error('HyperapifyClient is already initialized. Use HyperapifyClient.getInstance().');
        }
        instance = new HyperapifyClient(options);
        return instance;
    }
    static getInstance() {
        if (!instance) {
            throw new Error('HyperapifyClient is not initialized. Call HyperapifyClient.create() first.');
        }
        return instance;
    }
    /**
     * Reset the singleton instance. Intended for testing only.
     */
    static resetInstance() {
        instance = undefined;
    }
    getServices() {
        if (!this.serviceMap) {
            this.serviceMap = buildServiceMap(sdk, SDK_URL_MAP, this.logger);
        }
        return this.serviceMap;
    }
    /**
     * Access a domain service by name.
     *
     * @example
     * const tiktok = client.service('tiktok')
     * await tiktok.fetchPostDetail({ query: { aweme_id: '123' } })
     */
    service(domain) {
        const services = this.getServices();
        const domainService = services[domain];
        if (!domainService) {
            throw new Error(`Unknown service domain: "${domain}". Available: ${Object.keys(services).join(', ')}`);
        }
        return domainService;
    }
    get domains() {
        return Object.keys(this.getServices());
    }
}
//# sourceMappingURL=client.js.map