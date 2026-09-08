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
        return this.getHeight(node.left)- getHeight(node.right);
    }
    
    // RR
    rotateRight(root){
        // define pivot as the left child of root
        const piviot = root.left;
        if(!piviot) return root;
        const temp = piviot.right;
        pivot.right= root;
        root.left = temp;
        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;
        return pivot;
    }

    // LL
    rotateLeft(root){
        // define pivot as the right child of root
        const pivot = root.right;
        if(!pivot) return root;
        const temp = pivot.left;
        pivot.left = root;
        root.right = temp;
        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        pivot.height = Math.max(this.getHeight(pivot.left), this.getHeight(pivot.right)) + 1;
        return pivot;
    }
    
    // RL
    // LR
}