/**
 * A **binary tree** is a data structure where each node can point to **at most two other nodes**:

- `left`
- `right`

```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

Example:

```text
       10
      /  \
     5    20
```

Here:

- `10` points to `5` through `left`
- `10` points to `20` through `right`
- `5` and `20` have no children

**Maximum depth** is not the definition of a binary tree. It is a measurement or operation performed on the tree: the longest path from the root to a leaf.

```text
       10        depth 1
      /
     5           depth 2
    /
   2             depth 3
```

This tree has maximum depth `3`

 */
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