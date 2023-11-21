
// 简单

// 元组转为对象
type tuple = ["chiko", 24, "sex"];
// <>中的是参数 并对参数做限制
type TupleToObject<T extends readonly (keyof any)[]> = {
    [P in T[number]]: P; // in 是遍历 类似 for...in
}

type tupleObj = TupleToObject<tuple>

// 返回数组的第一个元素
type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
type first = [string, "chiko", 24];
type FristType = First<first>

// 获取数组的长度
type ArrayLength<T extends any[]> = T["length"]; // 还能这么写获取长度
type testArryL = ['chiko', '24', 24, "sex"]; // 元组就是一种明确类型的数组
type al = ArrayLength<testArryL>; // 可以获取元组长度

// 从第一个联合类型中排除第二个类型中所包含的
type MExclude<T, K> = T extends K ? never : T; // 知道了用到了extends的联合类型分发
type test = MExclude<string|number|boolean,string|number> // entends遇到联合类型的时候 会进行类似遍历的操作也叫分发

// 如果传入参数为true 返回第一个 否则返回第二个
type MIF<A extends boolean, T, K> = A extends true ? T : K;
type MifText = MIF<true, string, number> // string

// Concat 拼接元组
type Concat<T extends any[], K extends any[]> = [...T, ...K]; // 还可以用解构赋值

// Include 判断某个元素是否包含在当前元组中
type Include<T extends any[], K> = {
    [R in T[number]]: true;
}[K] extends true ? true : false;
type ppInclude = Include<["chiko", 24, true], "24"> // 没法区分字符串和数字

// 中等

// 实现ReturnType 返回函数的返回类型
type Return<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : never;
interface hello {
    a: string;
    b: number;
}
type sum = (a: number, b: number) => hello;
type funType = ReturnType<sum>;

// 元组转集合
type TupleToUnion<T extends any[]> = T[number];

// 