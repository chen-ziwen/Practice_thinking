
const a = [{ name: "chiko", age: 22 }, { name: "piko", age: 23 }, { name: "biko", age: 24 }];
// map 
// 筛选出name合集

const mapa = a.map((item) => item.name);

const reducea = a.reduce((pre, cur) => {
    pre.push(cur.name);
    return pre;
}, []);

console.log(mapa, reducea);
// filter
// 过滤年龄大于23的
const filtera = a.filter((item) => item.age <= 23);

const reducea1 = a.reduce((pre, cur) => {
    if (cur.age <= 23) {
        pre.push(cur)
    }
    return pre;
}, []);

console.log(filtera, reducea1);