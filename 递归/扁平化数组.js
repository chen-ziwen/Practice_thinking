
const arr = [1, [2, 3, [4, [5, [6, 7], 8], 9], 10]]
function myflat(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(myflat(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(myflat(arr))