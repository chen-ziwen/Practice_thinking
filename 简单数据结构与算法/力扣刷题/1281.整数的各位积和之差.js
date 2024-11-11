/**
 * @param {number} n
 * @return {number}
 */

// 遍历
var subtractProductAndSum = function (n) {
    let product = 1; // 积
    let sum = 0; // 和

    while (n !== 0) {
        const last = n % 10; // 拿到最后一位
        product *= last;
        sum += last;
        n = Math.floor(n / 10); // 每运行一次 位数减一
    }

    return product - sum;
};

// 递归
var sub = function (n, sup = 1, sum = 0) {
    return n === 0 ? sup - sum : sub(Math.floor(n / 10), n % 10 * sup, n % 10 + sum);
}