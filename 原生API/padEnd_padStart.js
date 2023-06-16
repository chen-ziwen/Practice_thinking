
// padStart
String.prototype.myPadStart = function (len, fill) {
    let s = '';
    const l = len - this.length;
    while (s.length < l) {
        s += fill;
        if (s.length > l) {
            s = s.slice(0, l);
        }
    }
    s += this;
    return s;
}

const nd = 'abc'.myPadStart(10, '*'); // 填充字符
const nm = 'abc'.myPadStart(10, 'a#@12'); // 填充字符串
console.log('padEnd 填充字符', nd);
console.log('padEnd 填充字符串', nm);

// padEnd
String.prototype.myPadEnd = function (len, fill) {
    let s = this + '';
    while (s.length < len) {
        s += fill;
        if (s.length > len) {
            s = s.slice(0, len);
        }
    }
    return s;
}

const sd = 'abcd'.myPadEnd(15, '*'); // 填充字符
const sm = 'abcd'.myPadEnd(15, '#abc'); // 填充字符
console.log('padStart 填充字符', sd);
console.log('padStart 填充字符串', sm);



