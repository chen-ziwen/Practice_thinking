// 获取属性和修改属性
const person = { name: "chiko", age: 24, sex: "男" };
const personProxy = new Proxy(person, {
    get: (target, property, receiver) => {
        if (property == "name") {
            return "我是拦截后修改的名字 ===>" + target[property]
        } else if (property == "age") {
            return "我能活1000岁 ===> 当前已活" + target[property]
        }
    },
    set: (target, property, value, receiver) => {
        if (property == "name") {
            target[property] = value; // 原对象的属性值也被修改了
        }
    }
})

const reactive = (val) => {
    return new Proxy(val, {
        get: (target, property, receiver) => {
            Reflect.get(...arguments);
        },
        set: (target, property, value, receiver) => {
            Reflect.set(...arguments)
        }
    })
}



personProxy.name = "我是大帅比";
console.log(person.name, personProxy.name, personProxy.age);

// 函数拦截
const count = (a, b) => {
    return a + b;
}

const countProxy = new Proxy(count, {
    // taget: 目标函数 thisArg: 执行上下文 argumentList 参数列表数组
    apply(target, thisArg, argumentList) {
        return target(argumentList[0], argumentList[1]) * 100;
    }
})

console.log('count ===>', count(2, 5)); // 7
console.log("count proxy ===>", countProxy(2, 5)) // 700