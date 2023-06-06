# Logger

Logger library with possibility to change logger function.
By default, logger function is console.log / warn / error.

## Usage

```typescript

import { log, warn, error, setLoggerFN } from '@webgenx/logger'

log('log message') // will call loggerFN('log message', LogLevel.INFO)

warn('warn message') // will call loggerFN('warn message', LogLevel.WARN)

error('error message') // will call loggerFN('error message', LogLevel.ERROR)

setLoggerFN((logString: string, logLevel: LogLevel) => {
    dbClient.post('/log', { logString, logLevel })
})

```

```typescript

import { monitor } from '@webgenx/logger'

class MyClass {
    @monitor
    myMethod(a: number, b: number): number {
        return a + b
    }
}

const myClass = new MyClass()
myClass.myMethod(1, 2) // will call loggerFN(`Call: myMethod(1, 2) => 3 (<duration>ms)`, LogLevel.MONITOR)

```