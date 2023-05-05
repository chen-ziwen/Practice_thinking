
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

const n = 'abc'.myPadStart(10, 'a#@12');
console.log('padEnd', n);

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

const s = 'abcd'.myPadEnd(10, '1234');
console.log('padStart', s);



