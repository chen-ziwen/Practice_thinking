let regex = /a[1234](b)?/g;

let string = "a0b a1b a2b a3b a4bb";

// console.log( string.match(regex) ); // [ 'a1b', 'a2b', 'a3b', 'a4b' ]
// console.log( regex.exec(string) ); // [ 'a1b', 'a1', undefined, index: 1, input: 'a0b a1b a2b a3b a4bb', groups: undefined ]

let arr
while ((arr = regex.exec(string)) !== null) { // 可以持续调用 每次调用都会返回一个匹配值 直到没有匹配值后返回null
    console.log(arr[0], regex.lastIndex);
}

// 如果是match的话，只会返回匹配到的结果

/*
很多正则方法都是基于exec来二次封装实现的，它的功能很强大，但是它用起来不是那么方便

exec() 是正则表达式的原始方法。
许多其他的正则表达式方法会在内部调用
exec()——包括一些字符串方法也会调用 exec()，
如 [Symbol.replace]()。
虽然 exec() 本身非常强大而又有效，但它通常不能最清楚地表示调用的目的。

如果你只是为了判断是否匹配，请使用 RegExp.prototype.test() 方法代替。
如果你只是为了找出所有匹配正则表达式的字符串而又不关心捕获组，请使用 String.prototype.match() 方法代替。此外，String.prototype.matchAll() 允许你对匹配项进行迭代，这有助于简化匹配字符串的多个部分（带有匹配组）。
如果你只是为了查找在字符串中匹配的索引，请使用 String.prototype.search() 方法代替。
*/
