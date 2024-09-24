/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = new Array(k);
    this.head = -1;
    this.tail = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;
    else {
        if (this.isEmpty()) {
            this.head = 0;
            this.tail = 0;
        } else {
            this.tail = (this.tail + 1) % this.queue.length;
        }
        this.queue[this.tail] = value;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;
    else {
        if (this.head == this.tail) {
            this.head = -1;
            this.tail = -1;
        } else {
            this.head = (this.head + 1) % this.queue.length;
        }
        return true;
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    else return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;
    else return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    if (this.tail == -1 && this.head == -1) return true;
    else return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    if (this.tail + 1 === this.head || (this.head === 0 && this.tail === this.queue.length - 1)) return true;
    else return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */