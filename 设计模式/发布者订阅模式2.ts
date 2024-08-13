// 发布订阅模式真的非常非常好用 尤其的是全局的
export class Listener {
    private mListenerQueue: { [key: string]: ((...args: any[]) => void)[] };
    private mListenerOnce: { [key: string]: ((...args: any[]) => void)[] };
    constructor() {
        this.mListenerOnce = {};
        this.mListenerQueue = {};
    }

    on(event: string | string[], fn: (...args: any[]) => void): any {
        if (typeof event == 'string') {
            event = [event];
        }
        for (let i = event.length - 1; i >= 0; i--) {
            if (!this.mListenerQueue[event[i]]) {
                this.mListenerQueue[event[i]] = [];
            }
            if (this.mListenerQueue[event[i]].indexOf(fn) == -1) {
                this.mListenerQueue[event[i]].push(fn);
            }
        }
        return {
            dispose: () => {
                this.off(event, fn);
            }
        }
    }

    once(event: string | string[], fn: (...args: any[]) => void) {
        if (typeof event == 'string') {
            event = [event];
        }
        for (let i = event.length - 1; i >= 0; i--) {
            if (!this.mListenerOnce[event[i]]) {
                this.mListenerOnce[event[i]] = [];
            }

            if (this.mListenerOnce[event[i]].indexOf(fn) == -1) {
                this.mListenerOnce[event[i]].push(fn);
            }
        }
        return {
            dispose: () => {
                this.off(event, fn);
            }
        }
    }

    off(event: string | string[], fn: (...args: any[]) => void) {
        if (typeof event == 'string') {
            event = [event];
        }
        for (let i = event.length - 1; i >= 0; i--) {
            if (this.mListenerQueue[event[i]]) {
                let index = this.mListenerQueue[event[i]].indexOf(fn);
                if (index > -1) {
                    this.mListenerQueue[event[i]].splice(index, 1);
                }
            }
            if (this.mListenerOnce[event[i]]) {
                let index = this.mListenerOnce[event[i]].indexOf(fn);
                if (index > -1) {
                    this.mListenerOnce[event[i]].splice(index, 1);
                }
            }
        }
    }

    emit(event: string, ...args: any[]) {
        if (this.mListenerQueue[event]) {
            this.mListenerQueue[event].forEach((callback: (...args: any[]) => void) => {
                callback(...args);
            });
        }

        if (this.mListenerOnce[event]) {
            this.mListenerOnce[event].forEach((callback: (...args: any[]) => void) => {
                callback(...args);
            });
            this.mListenerOnce[event].length = 0;
            delete this.mListenerOnce[event];
        }
    }

    dispose() {
        for (let key in this.mListenerOnce) {
            this.mListenerOnce[key].length = 0;
            delete this.mListenerOnce[key];
        }

        for (let key in this.mListenerQueue) {
            this.mListenerQueue[key].length = 0;
            delete this.mListenerQueue[key];
        }
    }
}