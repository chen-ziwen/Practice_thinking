{
    let regex = /ab{2,5}c/g; // {n,m} 为量词
    console.log(regex.test("abc"));
}

{
    let regex = /a[\d]bc/g; // [] 为字符组
    console.log(regex.test("a1bc"));
}

// 匹配字符串

/* 1. 匹配16进制颜色值
#ffbbad
#Fc01DF
#FFF
#ffE 
*/
{
    // 使用分支多选时 注意匹配顺序
    // 对
    let regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
    // 错 匹配为惰性匹配，会优先匹配前面，如果按下面的写法会导致长度为6被长度为3的匹配走
    let regex2 = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g;

    var string = "#ffbbad #Fc01DF #FFF #ffE";
    console.log(string.match(regex));
    // => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
}

/* 2. 匹配时间 以24小时为例
23:59
02:07
*/
{
    let regex = /^([01]\d|[2][0-3]):[0-5]\d$/;
    console.log(regex.test("23:59")); // true
    console.log(regex.test("02:07")); // true
}
/* 如果要求一位数也可以匹配
2:7
14:3
*/
{
    let regex = /^(0?[1-9]|1\d|2[0-3]):(0?[1-9]|[1-5]\d)$/;
    console.log(regex.test("2:7")); // true
    console.log(regex.test("14:3")); // true
}

/* 3. 匹配日期
 2017-06-32
 2017-06-10
 2023-12-01
 2023-13-01
 */
{
    let regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/;
    console.log(regex.test("2017-06-32")); // false
    console.log(regex.test("2017-06-10")); // true
    console.log(regex.test("2023-12-01")); // true
    console.log(regex.test("2023-13-01")); // false
}

/* 4. window操作系统文件 (这个比较难)
F:\study\javascript\regex\regular expression.pdf
F:\study\javascript\regex\
F:\study\javascript
F:\
*/
{
    let regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
    console.log(regex.test("F:\\study\\javascript\\regex\\regular expression.pdf")); // true
    console.log(regex.test("F:\\study\\javascript\\re|gex\\")); // false
    console.log(regex.test("F:\\study\\javascript")); // true
    console.log(regex.test("F:\\")); // true

}

/* 5. 匹配id
要求从
<div id="container" class="main"></div>
提取出id="container"
 */
{
    let regex = /id=".*?"/; // .匹配任何单个字符（除了换行符）这边要使用惰性匹配
    var string = '<div id="container" class="main"></div>';
    console.log(string.match(regex)[0]); // id="container"
}
// 或者
{
    let regex = /id="[^"]*"/; // .匹配任何单个字符（除了换行符）这边要使用惰性匹配
    var string = '<div id="container" class="main"></div>';
    console.log(string.match(regex)[0]); // id="container"
}

// 匹配位置

/* 1. 不匹配任何东西的正则 /.^/
因为此正则要求只有一个字符，但该字符后面是开头。 
 */

/* 2. 数字的千分位分隔
比如把"12345678"，变成"12,345,678"。
可见是需要把相应的位置替换成"," （位置可以理解为空字符串）。
 */
{
    let data = "1000000000";
    let data2 = "123456789";
    
    // 不匹配^前面的位置 匹配以长度为3的0-9组合字符串 匹配1到多次
    let regex = /(?!^)(?=(\d{3})+$)/g;

    var result = data.replace(regex, ",");
    var result2 = data2.replace(regex, ",");
    console.log(result); // 1,000,000,000
    console.log(result2); // 123,456,789
}

