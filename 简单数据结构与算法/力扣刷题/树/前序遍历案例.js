var preorderTraversal = function (root) {
    const list = [];

    // 递归思想真的很棒
    const generate = (root, ls) => {
        if (root === null) return null;
        ls.push(root.val); // 先将根节点推入
        generate(root.left, ls);  // 将左节点作为根节点推入 重复上述的操作
        generate(root.right, ls); // 将右节点作为根节点推入 重复上述的操作
    }

    generate(root, list);

    return list

};https://leetcode.cn/leetbook/read/data-structure-binary-tree/xecaj6/