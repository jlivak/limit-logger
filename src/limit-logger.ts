/**
 * Provides common console logging functions with configurable logging frequencies, that prevent subsequent
 * function calls from actually writing to the console unless the given frequency has passed.
 */
export class LimitLogger {
    private static lastEmitTime: Map<string, number> = new Map<string, number>();

    /**
     * Writes a message or object to the console using console.debug(), no more frequently than the passed in frequency.
     *
     * @param {any} message Message or object to be written to the console.
     * @param {string} logId A unique string used to identify the logging statement.
     * @param {number} minimumFrequencyInSeconds The minimum amount of time that must pass before another message with the same logId is logged to the console.
     */
    public static debug(message: any, logId: string, minimumFrequencyInSeconds: number): void {
        if (!logId) {
            logId = "";
        }

        if (this.lastEmitTime.has(logId)) {
            if (Date.now() - this.lastEmitTime.get(logId) < minimumFrequencyInSeconds * 1000) {
                return;
            }
        }

        console.debug(message);
        this.lastEmitTime.set(logId, Date.now());
    }

    /**
     * Writes a message or object to the console using console.info(), no more frequently than the passed in frequency.
     *
     * @param {any} message Message or object to be written to the console.
     * @param {string} logId A unique string used to identify the logging statement.
     * @param {number} minimumFrequencyInSeconds The minimum amount of time that must pass before another message with the same logId is logged to the console.
     */
    public static info(message: any, logId: string, minimumFrequencyInSeconds: number): void {
        if (!logId) {
            logId = "";
        }

        if (this.lastEmitTime.has(logId)) {
            if (Date.now() - this.lastEmitTime.get(logId) < minimumFrequencyInSeconds * 1000) {
                return;
            }
        }

        console.info(message);
        this.lastEmitTime.set(logId, Date.now());
    }

    /**
     * Writes a message or object to the console using console.log(), no more frequently than the passed in frequency.
     *
     * @param {any} message Message or object to be written to the console.
     * @param {string} logId A unique string used to identify the logging statement.
     * @param {number} minimumFrequencyInSeconds The minimum amount of time that must pass before another message with the same logId is logged to the console.
     */
    public static log(message: any, logId: string, minimumFrequencyInSeconds: number): void {
        if (!logId) {
            logId = "";
        }

        if (this.lastEmitTime.has(logId)) {
            if (Date.now() - this.lastEmitTime.get(logId) < minimumFrequencyInSeconds * 1000) {
                return;
            }
        }

        console.log(message);
        this.lastEmitTime.set(logId, Date.now());
    }

    /**
     * Writes a message or object to the console using console.warn(), no more frequently than the passed in frequency.
     *
     * @param {any} message Message or object to be written to the console.
     * @param {string} logId A unique string used to identify the logging statement.
     * @param {number} minimumFrequencyInSeconds The minimum amount of time that must pass before another message with the same logId is logged to the console.
     */
    public static warn(message: any, logId: string, minimumFrequencyInSeconds: number): void {
        if (!logId) {
            logId = "";
        }

        if (this.lastEmitTime.has(logId)) {
            if (Date.now() - this.lastEmitTime.get(logId) < minimumFrequencyInSeconds * 1000) {
                return;
            }
        }

        console.warn(message);
        this.lastEmitTime.set(logId, Date.now());
    }

    /**
     * Writes a message or object to the console using console.error(), no more frequently than the passed in frequency.
     *
     * @param {any} message Message or object to be written to the console.
     * @param {string} logId A unique string used to identify the logging statement.
     * @param {number} minimumFrequencyInSeconds The minimum amount of time that must pass before another message with the same logId is logged to the console.
     */
    public static error(message: any, logId: string, minimumFrequencyInSeconds: number): void {
        if (!logId) {
            logId = "";
        }

        if (this.lastEmitTime.has(logId)) {
            if (Date.now() - this.lastEmitTime.get(logId) < minimumFrequencyInSeconds * 1000) {
                return;
            }
        }

        console.error(message);
        this.lastEmitTime.set(logId, Date.now());
    }
}
