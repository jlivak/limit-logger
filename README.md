# Limit Logger (limit-logger)

[![License](https://img.shields.io/github/license/jlivak/limit-logger)](https://github.com/jlivak/limit-logger/blob/master/LICENSE) [![NPM Version](https://img.shields.io/npm/v/limit-logger)](https://npmjs.com/package/limit-logger)

Limit Logger is a small library that exposes common console logging functions with an added minimum frequency parameter.  Subsequent calls that happen before the given frequency is elapsed are discarded.  This allows you to avoid flooding the console with logging statements.

The main inspiration for writing this is while working with 2D/3D canvas rendering and animation loops (for ex. with `Window.requestAnimationFrame()`) and wanting to log debug output, but only needing it once every second and not once every frame.

## Usage

Limit Logger exposes a single `LimitLogger` export, on which you can call the following logger functions.

Each call must be given a `logId` (a unique string used for tracking subsequent calls) and a `minimumFrequencyInSeconds` (the minimum number of seconds that must pass before outputting another message with the same `logId`, fractional values are supported).

### Debug

```ts
// Log the debug message "I'm a debug message!" no more than once every 5 seconds.
LimitLogger.debug(`I'm a debug message!`, `Debug1`, 5);
```
### Info
```ts
// Log the `SomeObject` object no more than once every 250 milliseconds.
LimitLogger.info(SomeObject, `Info`, .25);
```

### Log
```ts
// Log the "Testing" log message no more than once every second.
LimitLogger.log(`Testing`, `Debug1`, 1);
```

### Warn
```ts
// Log the "Warning" log message no more than once five seconds.
LimitLogger.warn(`Warning`, `Manager.js:52`, 5);
```

### Error
```ts
// Log a blank error no more than once every minute.
LimitLogger.error(new Error(), `Error1`, 60);
```

### Advanced Usages
```ts
// Log only one message with the `Log.ts` id every minute.
// The first subsequent call after 60 seconds will be outputted.
LimitLogger.log("An output message", `Log.ts`, 60);
...
LimitLogger.log("An different output message", `Log.ts`, 60);
```

```ts
// Log the first message only once every minute.
// However allow the second message to be written after only 15 seconds have elapsed.
LimitLogger.error("Something bad happened.", `Error`, 60);
...
LimitLogger.error("Something really bad happened!", `Error`, 15);
```
