function deepClone(val) {
    if (val !== Object || val === null) {
        return val;
    }

    const data = val instanceof Array ? [] : {};
    for (let key in val) {
        data[key] = deepClone(val[key])
    }
    return data;
}

const data = {
    name: "chiko",
    age: 18,
    address: {
        city: "shanghai",
        country: "china"
    }
}