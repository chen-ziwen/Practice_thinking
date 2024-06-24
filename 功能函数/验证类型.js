function judgeType(dataType) {
    const type = typeof dataType;
    if (type !== 'object') { // 先进行typeof判断，如果是基础数据类型，直接返回
        return type
    }
    // 如果是引用类型，再进行如下的判断，正则返回结果
    return Object.prototype.toString
        .call(dataType)
        .replace(/^\[object (\S+)\]$/, '$1')
        .toLocaleLowerCase()
}

console.log(judgeType([() => { }])); // array
console.log(judgeType('no.1')); // string
console.log(judgeType(null)) // null
console.log(judgeType(undefined)); // undefined
console.log(judgeType(true)); // boolean
