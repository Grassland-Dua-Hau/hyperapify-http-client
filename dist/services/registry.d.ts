import type { Logger } from '../core/logger.js';
type ApiFunction = (...args: never[]) => unknown;
export type ServiceMap = Record<string, Record<string, (...args: never[]) => unknown>>;
/**
 * Build a domain-grouped service map from the generated SDK module.
 * Each function is wrapped with structured logging.
 */
export declare function buildServiceMap(sdkModule: Record<string, ApiFunction>, urlMap: Map<string, string>, logger: Logger): ServiceMap;
export {};
//# sourceMappingURL=registry.d.ts.map