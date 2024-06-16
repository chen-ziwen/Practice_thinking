// 实现对象的map
Object.prototype.map = function (callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function!`)
    }
    return JSON.parse(JSON.stringify(this, (key, value) => {
        if (key) {
            return callback.call(this, value, key, this);
        } else {
            return value;
        }
    }))
}

const targetData = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};
const t = targetData.map((item) => item * 2);

console.log(t); // { a: 4, b: 6, c: 8, d: 10 }