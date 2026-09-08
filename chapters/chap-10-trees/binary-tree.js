
// implementation of a binary tree in JavaScript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// function to calculate the maximum depth of a binary tree
const maxDepth =(root)=>{
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}

const root = new Node(10);
const leftChild = new Node(20);
const rightChild = new Node(30);
console.log(maxDepth(root)); // Output: 10
console.log(maxDepth(leftChild)); // Output: 1
console.log(maxDepth(rightChild)); // Output: 1

