// 来手写一下promise的功能

class myPromise {
    constructor(executor) {
        this.state = "Pending";
        this.reslut = undefined;
        this.callBacks = [];

        try {
            executor(this.reslove.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }

    reslove(value) {
        if (this.state == 'Pending') {
            this.state = 'Fulfilled';
            this.reslut = value;
            this.callBacks.forEach(callback => {
                callback.onFulfilled(value);
            })
        }
    }

    reject(error) {
        if (this.state == 'Pending') {
            this.state = 'Rejected';
            this.reslut = error;
            this.callBacks.forEach(callback => {
                callback.onRejected(error);
            })
        }
    }

    
}