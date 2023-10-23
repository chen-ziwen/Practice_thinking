// 去除字符串中出现次数最少的字符

function removeStr(str) {
    let nStr = ''; // 新的字符串
    const m = new Map();
    // 统计各个字符的数量
    for (let i = 0, len = str.length; i < len; i++) {
        if (m.has(str[i])) {
            const val = m.get(str[i]) + 1;
            m.set(str[i], val);
        } else {
            m.set(str[i], 1);
        }
    }

    const count = Array.from(m.values()); // 各个字符的次数
    const sort = count.sort();
    if (sort[0] == sort[sort.length - 1]) {
        return str; // 如果每一项字符长度都一致 返回原字符串
    }

    const minArr = []; // 找出数量最低的字符  可能有多个字符并列最低 就将最低的全部删除
    // 找出并列最低的值
    for (let [key, value] of m.entries()) {
        if (sort[0] == value) {
            minArr.push(key);
        }
    }

    for (let i = 0, len = str.length; i < len; i++) {
        if (minArr.includes(str[i])) {
            continue;
        }
        nStr += str[i];
    }

    return nStr;
}

const ss = removeStr("advddgfoasdas");
console.log(ss);