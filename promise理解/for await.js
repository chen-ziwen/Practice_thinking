const promises = [];

// 这样的写法不能一个一个等待，因为new Promise的时候，这些定时器就全部执行了。
const p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 3000)
});
const p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(2);
    }, 2000)
});
const p3 = new Promise(resolve => {
    setTimeout(() => {
        resolve(3);
    }, 1000)
});

promises.push(p1);
promises.push(p2);
promises.push(p3);

// 这样的写法可以等待，因为这样的写法每个new Promise都是新建的
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const p = [1000, 2000, 3000];

async function handlerForCycle() {
    for (let i = 0; i < promises.length; i++) {
        const id = await promises[i];
        console.log(id);
    }

    // 每次输出都会等待
    for (let j = 0; j < p.length; j++) {
        await delay(p[j]);
        console.log(j);
    }
}

async function handlerForOf() {
    for (let promise of promises) {
        const id = await promise;
        console.log(id);
    }
}

async function handlerWhile() {
    while (promises.length > 0) {
        const id = await promises.shift();
        console.log(id);
    }
}

handlerForCycle()
// handlerForOf()
// handlerWhile() // 上面几种形式都可以正常的等待