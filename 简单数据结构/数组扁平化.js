
// 1. 递归
const arr = [1, [2, [3, [4, 5], 6, 7, [8, 9, 10]]]];

function myFlat(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = [...result, ...myFlat(arr[i])];
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(myFlat(arr));

// 2. flat

console.log(arr.flat(Infinity));