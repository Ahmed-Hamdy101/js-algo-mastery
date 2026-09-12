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
        if(!node) return 0;
        return node.height;
    }
    
    // get the balance factor of a node
    getBalance(node){
        if(!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    
    // RR
    /**
     *  
     * @param {*} root 
     *    
     *        30
     *       /
     *     20
     *    /
     *  10
     * after rotation, the tree will look like this:
     *     20
     *   /   \
     * 10     30
     */  
    rotateRight(root){
        // define pivot as the left child of root
        let pivot = root.left; // 20
        // temporary variable to hold the right child of pivot
        let temp = pivot.right; // null
        // reassign the right child of pivot to be root
        pivot.right = root;
        // reassign the left child of root to be temp
        root.left = temp;
        // update the heights of the nodes
        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;
        return pivot;
    }

    // LL
    /**
     * 
     * @param {*} root 
     *       10
     *         \
     *         20
     *           \
     *      x     30
     * after rotation, the tree will look like this:
     */
    rotateLeft(root){
        // define pivot as the right child of root    
        const pivot = root.right;
        // if pivot is null, return root
        if (!pivot) return root;
        // temporary variable to hold the left child of pivot
        const temp = pivot.left;
        // reassign the left child of pivot to be root
        pivot.left = root;
        // reassign the right child of root to be temp
        root.right = temp;
        //  update the heights of the nodes
        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;
        
        return pivot;
    }

    // RL
    /**
     *  
     * @param {*} root
     *       30
     *     /
     *  20
     *    \
     *     25
     * after rotation, the tree will look like this:
     *     25
     *   /   \
     * 20     30
     * */
 rotateRightLeft(root) {
    const leftChild = root.left; // 20
    const pivot = leftChild.right; // 25

    const pivotLeft = pivot.left; // null
    const pivotRight = pivot.right; // null

    leftChild.right = pivotLeft; // null
    pivot.left = leftChild; // 20

    root.left = pivotRight; // null
    pivot.right = root;

    leftChild.height =
        Math.max(
            this.getHeight(leftChild.left),
            this.getHeight(leftChild.right)
        ) + 1;

    root.height =
        Math.max(
            this.getHeight(root.left),
            this.getHeight(root.right)
        ) + 1;

    pivot.height =
        Math.max(
            this.getHeight(pivot.left),
            this.getHeight(pivot.right)
        ) + 1;

    return pivot;
}
    
    // LR
    /**
     *  
     * @param {*} root
     *     10
     *      \
     *      20
     *     /
     *   25
     * after rotation, the tree will look like this:
     *     20
     *   /   \
     * 10     25
     * 
     * */
    rotateRightLeft(root){
    // do code without ai help
    }
}

// lets test RR
const tree = new AVLTree();
tree.root = tree.rotateRight(new Node(30, new Node(20, new Node(10))));
console.log(JSON.stringify({ value: tree.root.value, left: tree.root.left?.value, right: tree.root.right?.value }, null, 2));

// lets test LL
const tree2 = new AVLTree();
tree2.root = tree2.rotateLeft(new Node(30, new Node(20, new Node(10))));
console.log(JSON.stringify({ value: tree2.root.value, left: tree2.root.left?.value, right: tree2.root.right?.value }, null, 2));

// lets test RL
const tree3 = new AVLTree();
tree3.root = tree3.rotateRight(new Node(30, new Node(20, new Node(10, new Node(5)))));
console.log(JSON.stringify({ value: tree3.root.value, left: tree3.root.left?.value, right: tree3.root.right?.value }, null, 2));

// lets test LR
const tree4 = new AVLTree();
tree4.root = tree4.rotateLeft(new Node(30, new Node(20, new Node(10, new Node(5)))));
console.log(JSON.stringify({ value: tree4.root.value, left: tree4.root.left?.value, right: tree4.root.right?.value }, null, 2));    