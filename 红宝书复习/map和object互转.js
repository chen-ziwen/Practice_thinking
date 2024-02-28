const map = new Map([['name', "chiko"], ['age', 24]]);

// 将map转为object
const mChangeo = Object.fromEntries(map.entries()); //
console.log('map 转为 object', mChangeo);

// 将object转为map
const oChangem = new Map(Object.entries(mChangeo));
console.log('object 转为 map', oChangem)