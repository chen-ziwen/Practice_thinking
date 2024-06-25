// 模拟实现一个new

function myNew(constructor, ...args) {
    if (typeof constructor !== "function") {
        throw new Error("constructor must be a function");
    }
    // 1. 创建一个空对象，对象的原型指向构造函数的原型
    const obj = Object.create(constructor.prototype); // 创建一个指定原型的对象
    // 2. 执行构造函数，将this指向新创建的对象
    const result = constructor.apply(obj, args);
    // 3. 如果构造函数返回一个对象，则返回这个对象；否则返回新创建的对象 (这是js的构造函数的规定)
    return result && typeof result === "object" ? result : obj;

}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const o = myNew(Person, "chiko", "24", "男");
const n = new Person("chiko", "24", "男");

console.log(o); // Person { name: 'chiko', age: '24', sex: '男' } 
console.log(n); // Person { name: 'chiko', age: '24', sex: '男' }