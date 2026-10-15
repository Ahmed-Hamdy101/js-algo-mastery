# Chapter 06: Stacks

A stack is a linear data structure that follows the Last In, First Out (LIFO) rule.

This means the last item added is the first item removed.

## Why it matters

Stacks are used in many real-world problems, including:

- undo operations
- browser back navigation
- function call tracking
- expression evaluation

## Core idea

Think of a stack like a pile of plates:

- you place a new plate on top
- the top plate is the one you remove next

## Common operations

- `push(value)` – add to the top
- `pop()` – remove from the top
- `peek()` – inspect the top item
- `isEmpty()` – check if empty

## Files in this chapter

- `stack.js` – stack implementation and examples

## Example

```js
const stack = [];
stack.push('A');
stack.push('B');
stack.push('C');

console.log(stack.pop()); // C
```

## Practice questions

- What does LIFO mean?
- Why is `pop()` the key operation in a stack?
- Where do stacks appear in everyday software?
- What is the difference between a stack and an array?

## Key takeaway

Stacks are perfect when order matters and the most recent item should be processed first.

---

The next chapter introduces queues, which work in the opposite order: FIFO.
