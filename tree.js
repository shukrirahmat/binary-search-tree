function Tree(array) {
  const sortedarray = mergeSort([...new Set(array)]);
  let root = builtTree(sortedarray);

  function getRoot() {
    return root;
  }

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
    view();
  }

  function deleteRec(value, root) {
    if (root == null) return null;
    if (root.data == value) {
      if (root.left == null && root.right == null) return null;
      else if (root.left == null) return root.right;
      else if (root.right == null) return root.left;
      else {
        const dataCopy = getNextClosest(root)
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

  function view() {
    prettyPrint(getRoot());
  }

  return {
    view,
    insert,
    deleteItem,
  };
}

const t = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
t.view();
