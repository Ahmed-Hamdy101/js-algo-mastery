# Chapter 10: Trees

A tree is a hierarchical data structure made of nodes.

Each node can have children, and the structure usually has a single root node at the top.

## Why it matters

Trees are useful when data has natural parent-child relationships, such as:

- file systems
- DOM structures
- decision trees
- organization charts
- search trees

## Core idea

A node can connect to other nodes, usually through left and right references or child arrays.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

## Common tree operations

- insert
- search
- traverse
- delete
- find height or depth

## Binary tree vs BST

A binary tree allows up to two children per node.

A binary search tree (BST) adds ordering rules:

- smaller values go left
- larger values go right

This ordering makes searching much faster when the tree stays balanced.

## Files in this chapter

- `binary-tree.js` – binary tree implementation
- `bin-tree-1.js` – additional tree examples
- `binary-tree.md` – explanatory notes

## Practice questions

- What makes a tree different from a linked list?
- Why is a BST useful for lookup?
- What is the difference between a tree and a binary tree?
- What happens when a BST becomes unbalanced?

## Key takeaway

Trees are one of the most important structures in computer science because they allow efficient organization and traversal of hierarchical data.

---

The next chapter introduces AVL trees, which solve the balancing problem of ordinary BSTs.
