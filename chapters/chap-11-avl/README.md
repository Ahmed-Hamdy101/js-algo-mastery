# Chapter 11: AVL Tree

An AVL tree is a type of binary search tree that stays balanced automatically.

That matters because a normal BST can become too tall and slow down operations like insert, search, and delete. AVL trees keep their height close to `log(n)`, which gives better performance.

## Why this chapter matters

- BSTs are fast only when balanced.
- Unbalanced trees can degrade to `O(n)` in the worst case.
- AVL trees solve this by rotating nodes when the tree becomes uneven.

## Core idea

Each node stores a height value.

The tree checks the balance factor:

```js
balance = height(left subtree) - height(right subtree)
```

If the balance factor is too high or too low, the tree performs a rotation.

## Balance conditions

For every node in an AVL tree:

- left height and right height differ by at most 1
- that rule must hold for all nodes in the tree

If a node becomes unbalanced, a rotation fixes it.

## Rotation types

The examples in this chapter cover the main cases:

- LL rotation: left-left imbalance
- RR rotation: right-right imbalance
- LR rotation: left-right imbalance
- RL rotation: right-left imbalance

### Example

```text
      30
     /
    20  40
   /
  10
```

This is a valid BST, but if a new node causes left-heavy imbalance, the tree rotates to restore balance.

## Files in this chapter

- `AVL-tree.js` – base AVL tree structure and rotation logic
- `single-rotation.js` – examples of LL and RR balancing
- `double-rotation.js` – examples of LR and RL balancing

## How to read the code

1. Start with the node structure.
2. Look at the height and balance calculations.
3. Study each rotation individually.
4. Trace how the subtree structure changes after rotation.

## Key takeaway

An AVL tree gives you the benefits of a BST while keeping operations efficient:

- search: `O(log n)` average and worst case
- insert: `O(log n)`
- delete: `O(log n)`

This is one of the most classic self-balancing tree implementations you should understand for interviews.

## Practice questions

- Why do AVL trees need rotations?
- What is the balance factor?
- Which imbalance cases require single rotation vs double rotation?
- How does AVL compare to a regular binary search tree?

## Next step

After this chapter, move to the hash table chapter to see a completely different strategy for fast lookups using indexing and hashing.
