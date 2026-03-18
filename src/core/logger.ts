export interface LogEntry {
  readonly timestamp: string
  readonly level: 'info' | 'error'
  readonly service: string
  readonly method: string
  readonly message: string
  readonly duration?: number
  readonly error?: unknown
}

export interface Logger {
  info(entry: Omit<LogEntry, 'timestamp' | 'level'>): void
  error(entry: Omit<LogEntry, 'timestamp' | 'level'>): void
}

function createLogEntry(
  level: LogEntry['level'],
  entry: Omit<LogEntry, 'timestamp' | 'level'>
): LogEntry {
  return {
    timestamp: new Date().toISOString(),
    level,
    ...entry,
  }
}

export function createLogger(): Logger {
  return {
    info(entry) {
      const log = createLogEntry('info', entry)
      console.log(JSON.stringify(log))
    },
    error(entry) {
      const log = createLogEntry('error', entry)
      console.error(JSON.stringify(log))
    },
  }
}
