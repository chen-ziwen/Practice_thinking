// 16进制和rgb颜色互转
const formatColor = (color) => {
    let r, g, b, a;
    if (/^(rgb|rgba)/.test(color)) {
        // 将rgb或者rgba分解成数字数组
        const result = color.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
        r = Number(result[0]).toString(16);
        g = Number(result[1]).toString(16);
        b = Number(result[2]).toString(16);
        a = result[3] || 1;

        return `#${r}${g}${b}`;
    } else if (/^#/.test(color)) {
        const result = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/.exec(color);
        if (result) {
            r = parseInt(result[1], 16);
            g = parseInt(result[2], 16);
            b = parseInt(result[3], 16);
        }
        return `rgb(${r},${g},${b})`;
    }
};

console.log(formatColor('#fff')); // rgb(53,88,68)
console.log(formatColor("rgb(53,88,68)")); // #355844
