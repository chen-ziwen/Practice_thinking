const promises = [];

const p1 = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 3000)
});
const p2 = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(2);
    }, 2000)
});
const p3 = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(3);
    }, 1000)
});

promises.push(p1);
promises.push(p2);
promises.push(p3);


async function handlerForCycle() {
    for (let i = 0; i < promises.length; i++) {
        const id = await promises[i]();
        console.log(id);
    }
}

async function handlerForOf() {
    for (let promise of promises) {
        const id = await promise();
        console.log(id);
    }
}

async function handlerWhile() {
    while (promises.length > 0) {
        const id = await promises.shift()();
        console.log(id);
    }
}

handlerForCycle()
// handlerForOf()
// handlerWhile() // 上面几种形式都可以正常的等待