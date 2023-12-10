// ["abc","cba","acb","jpq"]  => [["abc","cba","acb"],["jpq"]];

const test = ["abc","cba","acb","jpq"];

function findDiff(arr) {
  const task = {};

  for(let i = 0; i<arr.length;i++) {
    const word = arr[i].split("").sort().join();

    if(!task[word]) {
        task[word] = [];
    }

    task[word].push(arr[i]);
  }

  return Object.values(task);
}

console.log(findDiff(test))