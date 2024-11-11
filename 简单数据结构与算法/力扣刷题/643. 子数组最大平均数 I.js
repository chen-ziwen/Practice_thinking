/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const n = nums.length;
    let ans = 0, sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    ans = sum / k;

    for (let j = k; j < n; j++) {
        sum += nums[j] - nums[j - k];
        avg = sum / k;
        ans = Math.max(avg, ans);
    }

    return ans;
};