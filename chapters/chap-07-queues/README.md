# Chapter 07: Queues

A queue is a linear data structure that follows the First In, First Out (FIFO) rule.

This means the first item added is the first item removed.

## Why it matters

Queues are used in:

- task scheduling
- printer job handling
- breadth-first search
- event processing systems

## Core idea

Imagine a line at a store:

- the person at the front is served first
- new people join at the back

## Common operations

- `enqueue(value)` – add at the end
- `dequeue()` – remove from the front
- `peek()` – inspect the front item
- `isEmpty()` – check whether the queue is empty

## Files in this chapter

- `queue.js` – queue implementation and examples

## Example

```js
const queue = [];
queue.push('A');
queue.push('B');

console.log(queue.shift()); // A
```

## Practice questions

- What does FIFO mean?
- Where does a queue appear in real software?
- Why is `shift()` or `dequeue()` important for queue behavior?
- How does a queue differ from a stack?

## Key takeaway

Queues are designed for processing items in the order they arrive, which is useful in many scheduling and traversal problems.

---

The next chapter introduces dynamic arrays and list-like structures.
