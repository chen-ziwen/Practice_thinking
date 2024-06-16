第 160 题：输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法

题目：
```js
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
test()
```
1秒后同时输出 1, 4, 9，因为forEach方法传入的函数是在内部去执行，也就是说它没办法让阻塞for循环的执行。代码解析如下：

forEach的简单实现
```js
Array.prototype.myForEach = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun.call(this, this[i], i, this);
    }
} 
```
改造test：
```js

async function test() {
  for(let v of list) {
    const res = await square(x)
    console.log(res)
  }
}
test()
```