A **binary tree** is a data structure where each node can point to **at most two other nodes**:

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

This tree has maximum depth `3`.




That rule applies specifically to a **binary search tree (BST)**:

```text
       10
      /  \
   smaller  larger
      5      20
```

For every node:

- Smaller values go to the **left**
- Larger values go to the **right**

A regular **binary tree** does not require ordering:

```text
       10
      /  \
     50    3
```

This is still a binary tree because each node has at most two children, but it is not a binary search tree.