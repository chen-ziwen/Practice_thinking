// 发布订阅模式真的非常非常好用 尤其的是全局的
class eventBus {
    constructor() {
        this.event = new Map();
        this.eventSwitch = new Map();
    }
    // 注册事件
    on(eventName, callBack) {
        if (!this.event.has(eventName)) {
            this.event.set(eventName, []);
        }
        this.event.get(eventName).push(callBack);

        // 返回值为函数 调用该函数时，可以直接移除掉该注册事件
        // 类似vue中的watch
        return () => {
            this.off(eventName, callBack);
        }
    }
    // 触发事件
    emit(eventName, ...args) {
        if (!this.event.has(eventName)) {
            return;
        }
        this.event.get(eventName).forEach((callBack) => {
            callBack.call(this, ...args);
        })
    }
    // 移除对应事件下的所有回调函数
    remove(eventName) {
        if (!this.event.has(eventName)) {
            return;
        }
        this.event.delete(eventName);
    }

    // 移除对应事件下的某一个回调函数
    off(eventName, callBack) {
        if (!this.event.has(eventName)) {
            return;
        }
        const index = this.event.get(eventName).indexOf(callBack);
        if (index === -1) {
            return;
        } else {
            this.event.get(eventName).splice(index, 1);
        }
    }

    // 对应事件只会触发一次
    once(eventName, ...args) {
        if (!this.event.has(eventName)) {
            return;
        }
        if (!this.eventSwitch.has(eventName)) {
            this.eventSwitch.set(eventName, true);
        } else {
            this.eventSwitch.set(eventName, false);
        }
        if (this.eventSwitch.get(eventName)) {
            this.event.get(eventName).forEach((callBack) => {
                callBack.call(this, ...args);
            })
        }
    }

} 