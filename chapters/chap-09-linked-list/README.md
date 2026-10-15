# Chapter 09: Linked List

A linked list is a linear data structure made of nodes.

Each node stores:

- a value
- a reference to the next node

Unlike an array, the nodes do not need to be stored in one continuous block of memory.

## Why it matters

Linked lists are useful when you want flexible insertion and removal without shifting large blocks of data.

## Core idea

Each node points to the next node in the list.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

## Main operations

- `insertAtHead(value)`
- `insertAtTail(value)`
- `remove(value)`
- `search(value)`
- `traverse()`

## Files in this chapter

- `LinkedList.js` – linked list implementation

## Advantages

- easy insertion at the front
- easy removal without shifting array elements
- flexible memory allocation

## Disadvantages

- slower random access than arrays
- more pointer overhead
- traversal is required to reach a specific node

## Practice questions

- What is the difference between a linked list and an array?
- Why can insertion be cheaper in a linked list?
- What is the role of the `next` pointer?
- When would you prefer an array over a linked list?

## Key takeaway

Linked lists are fundamental for understanding pointer-based structures and are useful when memory layout and insertion flexibility matter more than random access speed.

---

Next, the course moves into tree structures, starting with binary trees and then balancing them with AVL trees.
