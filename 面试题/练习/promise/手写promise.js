
const PENDING = 0; // 进行中
const FULFILLED = 1; // 成功
const REJECTED = 2; // 失败

class MPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(handle) {
    this.status = MPromise.p;
    this.value = null;
    this.result = null;
    this.onFulfilledList = [];
    this.onRejctedList = [];

    try {
      handle(this.resolve, this.resolve);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    if (this.status == MPromise.PENDING) {
      this.status = MPromise.FULFILLED;
      this.value = result;
      this.onFulfilledList.forEach(fn => fn());
    }
  }

  reject(error) {
    if (this.status == MPromise.PENDING) {
      this.status = "rejected";
      this.value = error;
      this.onRejctedList = [];
      this.onRejctedList.forEach(fn => fn());
    }
  }

  then(onFulfilled, onRejected) {
    let promise = new MPromise((resolve, reject) => {
      const resolvePromise = value => {
        try {
          if (typeof onFulfilled !== 'function') {
            resolve(value)
          } else {
            const res = onFulfilled(value)
            if (res instanceof MPromise) {
              res.then(f, j)
            } else {
              resolve(res)
            }
          }
        } catch (err) {
          reject(err)
        }
      }

      const rejectPromise = value => {
        try {
          if (typeof onRejected !== 'function') {
            reject(value);
          } else {
            const res = onRejected(value);
            if (res instanceof MPromise) {
              res.then(f, j);
            } else {
              reject(res);
            }
          }
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === MPromise.FULFILLED) {
        resolvePromise(this.value)
      }

      if (this.status === MPromise.REJECTED) {
        rejectPromise(this.value)
      }

      if (this.status === MPromise.PENDING) {
        if (onFulfilled && typeof onFulfilled === "function") {
          this.onFulfilledList.push(() => {
            setTimeout(() => {
              resolvePromise(this.value);
            }, 0)
          })
        }

        if (onRejected && typeof onRejected === "function") {
          this.onRejctedList.push(() => {
            setTimeout(() => {
              rejectPromise(this.value);
            }, 0)
          })
        }
      }

    })
    return promise;
  }


}