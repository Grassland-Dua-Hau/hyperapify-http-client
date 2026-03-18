export interface LogEntry {
    readonly timestamp: string;
    readonly level: 'info' | 'error';
    readonly service: string;
    readonly method: string;
    readonly path: string;
    readonly message: string;
    readonly duration?: number;
    readonly error?: unknown;
}
export interface Logger {
    info(entry: Omit<LogEntry, 'timestamp' | 'level'>): void;
    error(entry: Omit<LogEntry, 'timestamp' | 'level'>): void;
}
export declare function createLogger(): Logger;
//# sourceMappingURL=logger.d.ts.map