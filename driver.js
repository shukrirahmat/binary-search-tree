import Tree from "./tree.js";

function Driver() {
  let tree;

  function run() {
    createRandomTree();
    unbalanceTree();
    rebalanceTree();
  }

  function createRandomTree() {
    const array = [];
    for (let n = 0; n < 12; n++) {
      const value = getRandomInt(100);
      array.push(value);
    }
    tree = Tree(array);
    console.log("Binary Search Tree");
    tree.view();
    checkBalance();
    printOrders();
  }

  function unbalanceTree() {
    for (let n = 0; n < 4; n++) {
      const value = getRandomInt(100) + 100;
      tree.insert(value);
    }
    console.log("------------------------------");
    console.log("Inserting New Values");
    tree.view();
    checkBalance();
  }

  function rebalanceTree() {
    console.log("------------------------------");
    console.log("Rebalancing the tree");
    tree.rebalance();
    tree.view();
    checkBalance();
    printOrders();

  }

  function checkBalance() {
    const result = tree.isBalanced();
    console.log("Tree is balanced? : " + result);
  }

  function printOrders() {
    console.log("Level Order : " + tree.levelOrderAlt());
    console.log("PreOrder : " + tree.preOrder());
    console.log("PostOrder : " + tree.postOrder());
    console.log("InOrder : " + tree.inOrder());
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return {
    run,
  };
}

export default Driver;
