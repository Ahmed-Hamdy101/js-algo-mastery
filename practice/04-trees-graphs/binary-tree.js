/*
  Interview-style prompt
  -----------------------
  Build a binary tree and implement an inorder traversal.
  Print values in sorted order if the tree is a binary search tree.

  Follow-up:
  - What is the time complexity of traversal?
  - How does tree height affect performance?
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorder(node) {
  // TODO: visit left, current, then right
}

// Example test setup
// const root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// inorder(root);
