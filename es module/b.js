
console.log('我是b.js，我通过es module被引入到了a.js');

let i = 1;
export function test2() {
    console.log(i++)
}


export const name = "chiko";

export const obj = {
    name: "chiko",
    age: 24
}