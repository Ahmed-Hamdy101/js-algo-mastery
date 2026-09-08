
class Tree {
    // initialize the tree
    constructor() {
        this.root = null;
    }
    // return the tree as an object
    toObject() {
        return this.root;
    }

    // add a value to the tree
    add(value){
        if (this.root === null) {
            this.root = new Node(value);
        }
        // find a value in the tree
        let current = this.root;
        while(true){
            if(current.value> value ){
            // go left
                if (current.left){
                    current = current.left;
                }else{
                    // if no left child , insert one
                    current.left = new Node(value);
                    return;
                }
            }else{
                // go right
                if (current.right){
                    current = current.right;
                }else{
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }

}

class Node{
    constructor(value , left=null , right =null) {
        this .value = value;
        this.left = left;
        this.right = right;
    }
}