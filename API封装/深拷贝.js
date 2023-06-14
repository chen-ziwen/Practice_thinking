// 虽然说 JSON.parse(JSON.stringify(obj)) 可以实现大部分对象的深拷贝 但是面对一个特殊对象 例如函数，Date对象，Ma对象，Set对象就无法进行拷贝

function deepClone(data) {
    if (typeof data !== 'object' || data === null) {
        return data;
    }

    const clone = Array.isArray(data) ? [] : {};

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            clone[key] = deepClone(data[key]);
        }
    }

    return clone;
}


// 浅拷贝的方式太多了
// arr.slice()
// [...arr] 
// ...