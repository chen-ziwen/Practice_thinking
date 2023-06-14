// 非常非常简单 
const arr = [5, 4, 3, 2, 1, 0];
const arr2 = [1, 5, 8, 6, 9, 3, 12, 51, 100];

function myReverse(array) {
    const len = Math.floor(array.length / 2);
    for (let i = 0; i < len; i++) {
        [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]];
    }
    return array
}

const s = myReverse(arr2);
console.log('===>',s);