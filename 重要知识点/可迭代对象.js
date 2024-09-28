
 /* 
   只要一个对象具有 [Symbol.iterator] 方法，返回一个遵循迭代器协议的迭代器对象，
   那么这个对象就可以使用 for...of 循环进行遍历。这是 JavaScript 中可迭代对象的核心机制。

   因为对象本身并不具备 [Symbol.iterator] 方法，所以默认情况下，对象是不可迭代的，但是我们可以通过给对象添加一个迭代器的方式，让对象也可以被迭代。
 */

 // 1.利用数组生成的迭代器
const arr = ['a', 'b', 'c'];
const iterator1 = arr[Symbol.iterator]();
console.log(arr[Symbol.iterator](),iterator1.next()); // { value: 'a', done: false }

// 2.利用字符串生成的迭代器
const str = 'hello';
const iterator2 = str[Symbol.iterator]();
console.log(iterator2.next()); // { value: 'h', done: false }

// 3.利用Set生成的迭代器
const set = new Set(['a', 'b', 'c']);
const iterator3 = set[Symbol.iterator]();
console.log(iterator3.next()); // { value: 'a', done: false }

// 4.利用Map生成的迭代器 
const map = new Map([['a', 1], ['b', 2]]);
const iterator4 = map[Symbol.iterator]();
console.log(iterator4.next()); // { value: [ 'a', 1 ], done: false }

// 5.利用arguments生成的迭代器
function foo() {
    const iterator5 = arguments[Symbol.iterator]();
    console.log(iterator5.next()); // { value: 1, done: false }
}
foo(1, 2, 3);

// 6.NodeList生成的迭代器 
const pList = document.querySelectorAll('p');
const iterator6 = pList[Symbol.iterator]();
console.log(iterator6.next()); // { value: p, done: false }

// 7.TypedArray生成的迭代器
const typedArray = new Uint8Array([0x00, 0xff]);
const iterator7 = typedArray[Symbol.iterator]();
console.log(iterator7.next()); // { value: 0, done: false }

// 8.Generator函数(生成器函数)生成的迭代器
function * hello() {
    yield 'hello';
    yield 'world';
    yield '!';
}
const iterator8 = hello();
console.log(iterator8.next()); // { value: 'hello', done: false }

// 9.自定义可迭代对象
class MyIterable {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next: () => {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
}

const myIterable = new MyIterable([10, 20, 30]);
const iterator9 = myIterable[Symbol.iterator]();
console.log(iterator9.next()); // { value: 10, done: false }

// 10.给对象添加可迭代对象
const obj = {
    name: 'czw',
    age: 23,
    sex:'男',
    [Symbol.iterator]: function* () {
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                yield this[key];
            }
        }
    }
}
const iterator10 = obj[Symbol.iterator]();
console.log(iterator10.next()); // { value: 'czw', done: false }
console.log(iterator10.next()); // { value: 23, done: false }
console.log(iterator10.next()); // { value: '男', done: false }
console.log(iterator10.next()); // { value: undefined, done: true }
// 因为有了迭代器 所以对象也用for of 遍历了
for (let value of obj) {
    console.log(value);
} 
