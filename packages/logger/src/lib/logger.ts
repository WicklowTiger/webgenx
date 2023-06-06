export enum LogLevel {
	MONITOR = 'Monitor',
	INFO = 'Info',
	WARN = 'Warn',
	ERROR = 'Error',
}

export let _loggerFN: (logString: string, logLevel: LogLevel) => void = (logString: string, logLevel) => {
	switch (logLevel) {
		case LogLevel.MONITOR:
			console.log(`[Monitor]: ${logString}`)
			break
		case LogLevel.INFO:
			console.log(`[Info]: ${logString}`)
			break
		case LogLevel.WARN:
			console.warn(`[Warn]: ${logString}`)
			break
		case LogLevel.ERROR:
			console.error(`[Error]: ${logString}`)
			break
	}
}

/**
 * Set the logger function. Example: (logString: string, logLevel: LogLevel) => dbClient.post('/log', { logString, logLevel })
 * @param logger: (logString: string, logLevel: LogLevel) => void
 */
export function setLoggerFN(logger: (logString: string, logLevel: LogLevel) => void) {
	_loggerFN = logger
}

export function log(...data: any[]) {
	_loggerFN(JSON.stringify(data, null, 4), LogLevel.INFO)
}

export function warn(...data: any[]) {
	_loggerFN(JSON.stringify(data, null, 4), LogLevel.WARN)
}

export function error(...data: any[]) {
	_loggerFN(JSON.stringify(data, null, 4), LogLevel.ERROR)
}
