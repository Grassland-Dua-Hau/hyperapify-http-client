async function callWithLogging({ serviceName, methodName, path, logger, fn }, args) {
    const start = Date.now();
    logger.info({
        service: serviceName,
        method: methodName,
        path,
        message: 'request start',
    });
    try {
        const result = await fn(...args);
        const duration = Date.now() - start;
        logger.info({
            service: serviceName,
            method: methodName,
            path,
            message: 'request success',
            duration,
        });
        return result;
    }
    catch (error) {
        const duration = Date.now() - start;
        logger.error({
            service: serviceName,
            method: methodName,
            path,
            message: 'request error',
            duration,
            error,
        });
        throw error;
    }
}
/**
 * Extract the domain key from a URL path.
 *
 * Examples:
 *   /api/v1/tiktok/web/... → tiktok
 *   /fdb-hub/... → fdbHub
 */
function extractDomain(_fnName, url) {
    if (url.startsWith('/fdb-hub'))
        return 'fdbHub';
    const match = /^\/video-hub\/api\/v1\/([^/]+)/.exec(url);
    if (match?.[1]) {
        return match[1].replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    }
    return _fnName;
}
/**
 * Simplify generated function names by stripping the ApiV1{Platform}{Sub} suffix pattern.
 *
 * Examples:
 *   fetchPostDetailApiV1TiktokWebFetchPostDetailGet → fetchPostDetail
 *   healthCheckApiV1HealthCheckGet → healthCheck
 */
function simplifyMethodName(fnName) {
    const cleaned = fnName.replace(/(Get|Post)$/, '');
    const match = /^(.+?)ApiV1/.exec(cleaned);
    return match?.[1] ?? cleaned;
}
/**
 * Build a domain-grouped service map from the generated SDK module.
 * Each function is wrapped with structured logging.
 */
export function buildServiceMap(sdkModule, urlMap, logger) {
    const services = {};
    for (const [fnName, fn] of Object.entries(sdkModule)) {
        if (typeof fn !== 'function')
            continue;
        const url = urlMap.get(fnName);
        if (!url)
            continue;
        const domain = extractDomain(fnName, url);
        const methodName = simplifyMethodName(fnName);
        services[domain] ??= {};
        services[domain][methodName] = ((...args) => callWithLogging({ serviceName: domain, methodName, path: url, logger, fn }, args));
    }
    return services;
}
//# sourceMappingURL=registry.js.map