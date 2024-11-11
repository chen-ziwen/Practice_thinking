/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var vowelStrings = function (words, left, right) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    let sum = 0;
    for (let i = left; i <= right; i++) {
        const word = words[i];
        if (set.has(word[0]) && set.has(word[word.length - 1])) sum++;
    }
    return sum;
};