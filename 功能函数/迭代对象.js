// 给对象增加一个迭代器

Object.prototype[Symbol.iterator] = function () {
    let index = 0;
    const val = Object.entries(this);
    return {
        next: () => {
            let done = index > val.length;
            let value = !done ? val[index++] : undefined;
            return {
                done,
                value,
            }
        }
    }
}

const obj = {
    name: 'czw',
    age: 23,
    sex:'男',
}

for (let item of obj) {
    if (item == undefined) {
        break;
    }
    console.log(item);
}