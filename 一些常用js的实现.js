// forEach的实现
const arr = ['你好', 2, '测试', 4, '成功'];
Array.prototype.myForEach = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun.call(this, i, this[i], this);
    }
}


arr.myForEach((i, val, item) => {
    console.log(i, val, item);
});

// map的实现
const person = [{ name: '陈子文', age: 23 }, { name: '陈怡欢', age: 26 }, { name: '妈妈', age: 53 }];
Array.prototype.myMap = function (fun) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        const val = fun.call(this, i, this[i], this)
        arr.push(val);
    }
    return arr;
}

const nperson = person.myMap((i, val, item) => {
    return item[i].name;
})
console.log(nperson);

// filter的实现
const person2 = [{ name: '陈子文', age: 23 }, { name: '陈怡欢', age: 26 }, { name: '妈妈', age: 53 }];
Array.prototype.myFilter = function (fun) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        const judge = fun.call(this, i, this[i], this);
        if (judge) {
            arr.push(this[i])
        }
    }
    return arr;
}

const n2person = person2.myFilter((i, val, item) => {
    return val.age >= 26
})

console.log(n2person);
