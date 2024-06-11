const arr = [1, 2, 3, 4, 5, 10, 6, 6, 7, 8, 8, 8];

function unique(arr) {
    // 1. set 
    // return [...new Set(arr)];

    // 2. 哈希表
    // const map = {};
    // const n = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!map[arr[i]]) {
    //         map[arr[i]] = true;
    //         n.push(arr[i]);
    //     };
    // }
    // return n;

    // 3. 内置函数举例
    // return arr.filter((item, index) => arr.indexOf(item) === index);

    // 4. 双层循环
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

console.log(unique(arr));



