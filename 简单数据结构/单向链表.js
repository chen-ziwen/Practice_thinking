// 单向链表
var MyLinkedList = function () {
    this.head = null; // { data,next } 头节点
    this.length = 0; // 链表总长度
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length) return -1;
    if (index === 0) return this.head.data;
    else {
        let current = this.head, i = 0;
        while (i++ < index) {
            current = current.next; // next 为指向下一个对象的指针
        }
        return current.data;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = { data: val, next: null };
    if (!this.head) this.head = newNode;
    else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = { data: val, next: null };
    if (!this.head) this.head = newNode;
    else {
        let current = this.head, i = 0;
        while (i++ < this.length - 1) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) return;
    if (index == 0) return this.addAtHead(val);
    else if (index == this.length) return this.addAtTail(val);
    else {
        const newNode = { data: val, next: null };
        let current = this.head, pre, i = 0;
        while (i++ <= index - 1) {
            pre = current;
            current = current.next;
        }
        pre.next = newNode;
        newNode.next = current;
    }
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) return;
    if (index == 0) this.head = this.head?.next || null;
    else {
        let current = this.head, pre, i = 0;
        while (i++ < index) {
            pre = current;
            current = current.next;
        }
        pre.next = current?.next || null;
    }
    this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */