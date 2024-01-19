
// 简单

// 题目：元组转为对象
type tuple = ["chiko", 24, "sex"];
// <>中的是参数 并对参数做限制
type TupleToObject<T extends readonly (keyof any)[]> = {
    [P in T[number]]: P; // in 是遍历 类似 for...in
}
type tupleObj = TupleToObject<tuple>

// 题目：返回数组的第一个元素
type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
type first = [string, "chiko", 24];
type FristType = First<first>

// 题目：获取数组的长度
type ArrayLength<T extends any[]> = T["length"]; // 还能这么写获取长度
type testArryL = ['chiko', '24', 24, "sex"]; // 元组就是一种明确类型的数组
type al = ArrayLength<testArryL>; // 可以获取元组长度

// 题目：从第一个联合类型中排除第二个类型中所包含的
type MExclude<T, K> = T extends K ? never : T; // 知道了用到了extends的联合类型分发
type test = MExclude<string | number | boolean, string | number> // entends遇到联合类型的时候 会进行类似遍历的操作也叫分发

// 题目：如果传入参数为true 返回第一个 否则返回第二个
type MIF<A extends boolean, T, K> = A extends true ? T : K;
type MifText = MIF<true, string, number> // string

// 题目：Concat 拼接元组
type Concat<T extends any[], K extends any[]> = [...T, ...K]; // 还可以用解构赋值

// 题目：Include 判断某个元素是否包含在当前元组中
type Include<T extends any[], K> = {
    [R in T[number]]: true;
}[K] extends true ? true : false;
type ppInclude = Include<["chiko", 24, true], "24"> // 没法区分字符串和数字

// 中等

// 题目：实现ReturnType 返回函数的返回类型
type Return<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : never;
interface hello {
    a: string;
    b: number;
}
type sum = (a: number, b: number) => hello;
type funType = ReturnType<sum>;

// 题目：元组转集合
type TupleToUnion<T extends any[]> = T[number];

// keyof 不能去除可选性
type person = { name?: string; age: number; }
type MyRequired<T> = {
    [P in keyof T]: T[P];
}
// 类型是可以直接通过key value的形式直接拿到属性的类型的 // 这样可以知道可选其实还是可选的
type a = keyof person extends (string | undefined) ? true : false;
type TestPerson = MyRequired<person>;

// 题目：实现Readonly2
// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
// K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样,提供K的话，就值对K中的值变为只读。

// 这里的 = 是提供默认值的意思
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
} & T; // 牛逼 很巧妙

// 题目：深度ReadOnly
// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
// 递归实现很棒
type IsObjectLiseral<T> = keyof T extends never ? false : true;
type DeepReadOnly<T> = {
    readonly [P in keyof T]: IsObjectLiseral<T[P]> extends true ? DeepReadOnly<T[P]> : T[P];
}

// 题目：最后一个元素
// 实现一个Last<T>
// infer 英文翻译：推断;推理;推论;暗示;意指;间接地提出
// 通过这种方式 拿到数组的最后一位 
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;

// 题目：查找类型
// 这里的extends也用到了联合类型分发，只要是联合类型用到extends就会分发
// 类似于遍历每一项，只要符合要求就返回，如果符合多项就返回一个联合类型，不符合就返回never
type LookUp<T extends { type: string }, K> = T extends { type: K } ? T : never;
type TestLookUp = LookUp<{ type: "cat", name: "chiko" } | { type: "dog", name: "huan" }, "cat">

// 题目：去除左侧空白
// 这题有点没理解
type TWhiteSpace = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${TWhiteSpace}${infer R}`
    ? TrimLeft<R>
    : S