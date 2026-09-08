// AVL Tree

 class Node{
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = 1;
    }

 }

 class AVLTree{
    constructor(){
        this.root = null;
    }
    // get the height of a node
    getHeight(node){
        if(!node==null) return 0;
        return node.height;
    }
    // get the balance factor of a node
    getBalance(node){
        if(!node ==null) return 0;
        return getHeight(node.left)-getHeight(node.right);
    }
    // rotateRight(root)
    rotateRight(root){
    // define pivot as the left child of root
    // 20
    const pivot = root.left;
    // if pivot is null, return root
    if(!pivot) return root;
    // define temp as the right child of pivot
    const temp = pivot.right;
    // set the right child of pivot to root
    pivot.right  = root;
    // set the left child of root to temp
    root.left = temp;
    root.height = Math.max(getHeight(root.left),getHeight(root.right))+1;
    pivot.height = Math.max(getHeight(pivot.left),getHeight(pivot.right))+1;
    return pivot;
    }
    
    // rotateLeft(root) 
    rotateLeft(root){
    // define pivot as the right child of root
    const pivot =root.right;
    // if pivot is null, return root
    if(!pivot) return root;
    // define temp as the left child of pivot
    const temp = pivot.left; //null
    // set the left child of pivot to root
    pivot.left=root;
    // set the right child of root to temp
    root.right=temp;
    // update the height of root and pivot
    root.height = Math.max(getHeight(root.left),getHeight(root.right))+1;
    pivot.height = Math.max(getHeight(pivot.left),getHeight(pivot.right))+1;
    return pivot;
    }
}