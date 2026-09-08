class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = 1;
    }
}

class AVLTree {
    // create a new empty tree
    constructor() {
        this.root = null;
    }

    // get the height of a node
    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    // get the balance factor of a node
    getBalance(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(root) {
        const pivot = root.left;
        if (!pivot) return root;

        const temp = pivot.right;
        pivot.right = root;
        root.left = temp;

        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;

        return pivot;
    }

    rotateLeft(root) {
        const pivot = root.right;
        if (!pivot) return root;

        const temp = pivot.left;
        pivot.left = root;
        root.right = temp;

        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;
        
        return pivot;
    }
}

const tree = new AVLTree();
tree.root = tree.rotateRight(new Node(30, new Node(20, new Node(10))));
console.log(JSON.stringify({ value: tree.root.value, left: tree.root.left?.value, right: tree.root.right?.value }, null, 2));