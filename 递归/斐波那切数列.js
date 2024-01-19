// 递归 复杂度太高
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

// 动态规划 
// 动态规划算是递归的一个分支
// 它会将总问题分成很多个子问题，然后保存子问题重复的值 减少递归的复杂度
// 像这道题它只需要计算出f(n) = f(n-1)+f(n-2)即可，就可以不断地去保存前一次的计算值
var fib = function (n) {
    let m = 1000000007;
    if (n < 2) return n;
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = (p + q) % m;
    }
    return r;
};