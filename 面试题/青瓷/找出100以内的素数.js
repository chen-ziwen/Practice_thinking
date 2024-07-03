// 找出给定数字以内的素数(质数) 返回数组
// 素数的定义就是 大于1的数中只能被1和自身整除的数
function primeNumber(num) {
    const arr = [];
    for (let i = 2; i <= num; i++) {
        let p = true;
        // j < i 是为了避免重复判断 因为j大于i的时候，没有必要判断
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                p = false;
                break;
            }
        }
        if (p) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(primeNumber(100));