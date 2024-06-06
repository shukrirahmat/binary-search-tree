function Tree(array) {
  const sortedarray = mergeSort([...new Set(array)]);
  let root = builtTree(sortedarray);

  function builtTree(array) {
    if (array.length === 0) return null;

    let mid = Math.floor((array.length - 1) / 2);
    const root = Node(array[mid]);

    root.left = builtTree(array.slice(0, mid));
    root.right = builtTree(array.slice(mid + 1));

    return root;
  }

  function insert(value) {
    root = insertRec(value, root);
  }

  function insertRec(value, root) {
    if (root == null) {
      return Node(value);
    }

    if (value < root.data) {
      root.left = insertRec(value, root.left);
    } else {
      root.right = insertRec(value, root.right);
    }

    return root;
  }

  function deleteItem(value) {
    root = deleteRec(value, root);
  }

  function deleteRec(value, root) {
    if (root == null) return null;
    if (root.data == value) {
      if (root.left == null && root.right == null) return null;
      else if (root.left == null) return root.right;
      else if (root.right == null) return root.left;
      else {
        const dataCopy = getNextClosest(root);
        const rightRoot = deleteRec(dataCopy, root.right);
        root.data = dataCopy;
        root.right = rightRoot;
        return root;
      }
    }

    if (value < root.data) {
      root.left = deleteRec(value, root.left);
    } else {
      root.right = deleteRec(value, root.right);
    }

    return root;
  }

  function getNextClosest(node) {
    let currentNode = node.right;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  function find(value) {
    return findRec(value, root);
  }

  function findRec(value, root) {
    if (root == null) return null;
    if (root.data === value) return root;

    if (value < root.data) {
      return findRec(value, root.left);
    } else {
      return findRec(value, root.right);
    }
  }

  function levelOrder(callback = null) {
    const queue = [root];
    const values = [];

    while (queue.length > 0) {
      values.push(queue[0].data);
      if (queue[0].left !== null) queue.push(queue[0].left);
      if (queue[0].right !== null) queue.push(queue[0].right);
      queue.shift();
    }

    if (callback !== null) values.forEach(callback);
    else return values;
  }

  function levelOrderAlt(callback = null) {
    const values = levelOrderRec([], [root]);

    if (callback !== null) values.forEach(callback);
    else return values;
  }

  function levelOrderRec(values, queue) {
    if (queue.length === 0) {
      return values;
    }

    values.push(queue[0].data);
    if (queue[0].left !== null) queue.push(queue[0].left);
    if (queue[0].right !== null) queue.push(queue[0].right);
    queue.shift();

    return levelOrderRec(values, queue);
  }

  function view() {
    prettyPrint(root);
  }

  return {
    view,
    insert,
    deleteItem,
    find,
    levelOrder,
    levelOrderAlt
  };
}

const t = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
t.view();

function addOne(x) {
  console.log(x + 1);
}
