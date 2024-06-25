const arr = [1, 3, 5, 2, 4, 6, 7, 9, 8, 10];

// 外层for控制轮数，内层for控制对比次数
for (let i = 0; i < arr.length; i++) {
    // 这边减去i是因为每轮对比后，最后一个值就已经排好序了，所以不需要再对比
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

console.log(arr);