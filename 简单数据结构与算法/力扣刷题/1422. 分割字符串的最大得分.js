/**
 * @param {string} s
 * @return {number}
 */

var maxScore = function (s) {
    let total = 0;
    for (let i = 1; i < s.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (s[j] === "0") max++;
        }

        for (let j = i; j < s.length; j++) {
            if (s[j] === "1") max++;
        }

        total = Math.max(total, max);
    }

    return total;
};
