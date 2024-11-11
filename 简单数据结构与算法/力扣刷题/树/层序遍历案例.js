var levelOrder = function(root) {
    const list = [];
    let level = 0;

    // 通过前序遍历 + 层级确认 保证了推入数据的准确性
    // 虽然前序遍历和层序遍历的顺序完全不一样，但是相同点就是它们都是一层一层往下算的
    // 只需要在每一层都单独创建一个数组，可以确保只有当前层级的数据才会被推入
    const generate = (root, list, level) => {
      if(root === null) return null;
      
      if(level >= list.length) {
          list.push([])
      }

      list[level].push(root.val);
      generate(root.left, list, level + 1);
      generate(root.right, list, level + 1);
    }

    generate(root, list, level);

    return list;
};