
// 实现数组，对象的深拷贝
function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    const data = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            data[key] = deepClone(obj[key]);
        }
    }
    return data;                                                                      
}

const origin = {
    name: 'czw',
    age: 23,
    type: ['normal', 'del', 'add'],
}

const b = origin;
const c = deepClone(origin);

console.log(b === origin,b); //  true { name: 'czw', age: 23, type: [ 'normal', 'del', 'add' ] }
console.log(b.type === origin.type,b.type); // true ['normal', 'del', 'add']
console.log(c === origin, c); // false  { name: 'czw', age: 23, type: [ 'normal', 'del', 'add' ] }
console.log(c.type === origin.type, c.type); // false ['normal', 'del', 'add']