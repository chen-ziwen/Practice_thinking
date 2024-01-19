// 每次你可以爬1或2个台阶。你有多少种不同的方法可以爬到楼顶呢?
// 爬楼梯也是除了0和1,其他项都是前两项的和
// 1: 1
// 2: 1+1, 2
// 3: 1+1+1, 2+1, 1+2
// 4: 1+1+1+1, 2+2, 1+1+2, 1+2+1, 2+1+1

// 递归
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
};

// 动态规划 这道题其实和斐波那契几乎一模一样
function climbStairs() {
    if (n <= 2) return n;
    let q = 0, p = 1, r = 2;
    for (let i = 3; i <= n; i++) {
        q = p;
        p = r;
        r = q + p
    }
    return r;
}

