function createLogEntry(level, entry) {
    return {
        timestamp: new Date().toISOString(),
        level,
        ...entry,
    };
}
export function createLogger() {
    return {
        info(entry) {
            const log = createLogEntry('info', entry);
            console.log(JSON.stringify(log));
        },
        error(entry) {
            const log = createLogEntry('error', entry);
            console.error(JSON.stringify(log));
        },
    };
}
//# sourceMappingURL=logger.js.map