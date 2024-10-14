
/* 1. 匹配如下的字符串
#ffbbad
#Fc01DF
#FFF
#ffE
*/
{
    // 必须用^ $ 不然匹配到前面 
    // 因为加了^ $ 就会匹配完整的字符串 而不会匹配其中一段就得出结果
    let reg = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

    const colors = [
        '#ffbbad',
        '#Fc01DF',
        '#FFF',
        '#ffE',
        '#12',      // 无效
        'abc123',   // 无效
        '#ffedg1'   // 无效
    ];

    colors.forEach(color => {
        // test匹配规则
        if (reg.test(color)) {
            console.log(color + " 是有效条件");
        } else {
            console.log(color + " 是无效条件");
        }
    })
}

/* 2. 匹配时间
23:59
02:07
 */
{
    let reg = /^([01][1-9]|2[0-3]):([0-5][0-9])$/;

    const times = [
        "23:59",
        "02:07",
        "24:08" // 无效
    ];

    times.forEach(time => {
        if (reg.test(time)) {
            console.log(time + " 是有效时间");
        } else {
            console.log(time + " 是无效时间");
        }
    })

}

/* 3. 匹配日期
2017-06-10

 */
{
    let reg = /^[0-9]{4}\-(0[0-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;

    const dates = [
        "2017-06-10",
        "3560-09-10",
        "2022-12-32" // 无效
    ];


    dates.forEach(dates => {
        if (reg.test(dates)) {
            console.log(dates + " 是有效日期");
        } else {
            console.log(dates + " 是无效日期");
        }
    })
}

/* 4. window操作系统文件路径
F:\study\javascript\regex\regular expression.pdf
F:\study\javascript\regex\
F:\study\javascript
F:\
*/
{
    let reg = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;

    const files = [
        "F:\\study\\javascript\\regex\\regular expression.pdf",
        "F:\\study\\javascript\\regex\\",
        "F:\\study\\javascript",
        "F: \\",
    ];

    files.forEach(file => {
        if (reg.test(file)) {
            console.log(file + " 是有效文件");
        } else {
            console.log(file + " 是无效文件");
        }
    })
}