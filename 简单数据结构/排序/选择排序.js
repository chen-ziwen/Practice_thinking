const arr = [1, 3, 5, 2, 4, 6, 7, 9, 8, 10];

for (let i = 0; i < arr.length; i++) {
    const minIndex = i; // 通过赋值minIndex的方式，将本轮循环中最小的值选出来。
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}


