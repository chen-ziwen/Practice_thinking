

function myDeepClone(data) {
    if (typeof data !== "object" || data === null) {
        return data;
    }

    const obj = data instanceof Array ? [] : {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            obj[key] = myDeepClone(data[key]);
        }
    }

    return obj;
}


const a = {
    name: "chiko",
    age: [18, 24],
    sex: {
        man: "男",
        woman: "女"
    }
}

const b = myDeepClone(a);

console.log('a ===>',a,'b ===>',b,a === b, a.age === b.age);