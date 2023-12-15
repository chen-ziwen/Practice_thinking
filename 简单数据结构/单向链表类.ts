class LinkedList {
    private length: number;
    private head: any;
    constructor() {
        this.length = 0;
        this.head = null;
    }

    // 根据索引查找链表中对应的值 如果没有则返回-1
    get(index: number) {
        if (index < 0 || index >= this.length) return -1;
        if (index === 0) return this.head.data;
        else {
            let current = this.head, i = 0;
            while (i++ < index) {
                current = current.next;
            }
            return current.data;
        }
    }

    // 往链表前方插入一条值为val的节点
    addAtHead(val: any) {
        const node = { data: val, next: null };
        if (!this.head) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // 往链表后方插入一条值为val的节点
    addAtTail(val: any) {
        const node = { data: val, next: null };
        if (!this.head) this.head = node;
        else {
            let current = this.head, i = 0;
            while (i++ < this.length - 1) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    // 
    addAtIndex(index: number, val: any) {
        if (index < 0 || index > this.length) return;
        if (index === 0) return this.addAtHead(val);
        else if (index === this.length) return this.addAtTail(val);
        else {
            const node = { data: val, next: null };
            let current = this.head, pre, i = 0;
            while (i++ < index - 1) {
                pre = current;
                current = current.next;
            }
            pre.next = node;
            node.next = current;
        }
        this.length++;
    }

    deleteAtIndex(index: number) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) this.head = this.head.next;
        else {
            let current = this.head, pre, i = 0;
            while (i++ < index) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;
        }
        this.length--;
    }
}

const linked = new LinkedList(); // 创建一个链表