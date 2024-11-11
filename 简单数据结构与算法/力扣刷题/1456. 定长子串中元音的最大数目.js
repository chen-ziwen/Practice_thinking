/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const len = s.length;

    let ans = 0, count = 0;

    for (let i = 0; i < k; i++) {
        count += isVowel(s[i]);
    }
    ans = count;

    for (let j = k; j < len; j++) {
        count += isVowel(s[j]) - isVowel(s[j - k]);
        ans = Math.max(ans, count);
    }

    return ans;
};

var isVowel = function (char) {
    const set = new Set(["a", "e", "i", "o", "u"]);
    return set.has(char) ? 1 : 0;
}
