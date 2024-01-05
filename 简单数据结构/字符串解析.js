var decodeString = function (s) {
    const numStack = [];
    const strStack = [];
    let num = 0; // 每多一位数 10倍
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (/\d/.test(s[i])) {
            num = num * 10 + +s[i];
        } else if (s[i] == "[") {
            strStack.push(str);
            str = "";
            numStack.push(num);
            num = 0; // 倍数清空 计算下一轮倍数
        } else if (s[i] == "]") {
            str = strStack.pop() + str.repeat(numStack.pop());
        } else {
            str += s[i];
        }
    }
    return str;
};