import { _loggerFN, LogLevel } from './logger'

export function monitor(target: any, key: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value
	descriptor.value = function (...args: any[]) {
		const a = args.map((a) => JSON.stringify(a)).join()
		const start_time = performance.now()
		const result = originalMethod.apply(this, args)
		const duration = performance.now() - start_time
		const r = JSON.stringify(result, null, 4)
		_loggerFN(`Call: ${key}(${a}) => ${r} (${duration}ms)`, LogLevel.MONITOR)
		return result
	}
	return descriptor
}
