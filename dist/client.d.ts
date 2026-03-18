export interface HyperapifyClientOptions {
    readonly keyId: string;
    readonly secretKey: string;
    readonly baseUrl?: string;
}
export declare class HyperapifyClient {
    private readonly logger;
    private serviceMap;
    private constructor();
    static create(options: HyperapifyClientOptions): HyperapifyClient;
    static getInstance(): HyperapifyClient;
    /**
     * Reset the singleton instance. Intended for testing only.
     */
    static resetInstance(): void;
    private getServices;
    /**
     * Access a domain service by name.
     *
     * @example
     * const tiktok = client.service('tiktok')
     * await tiktok.fetchPostDetail({ query: { aweme_id: '123' } })
     */
    service(domain: string): Record<string, (...args: never[]) => unknown>;
    get domains(): string[];
}
//# sourceMappingURL=client.d.ts.map