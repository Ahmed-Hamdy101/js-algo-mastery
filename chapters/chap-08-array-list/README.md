# Chapter 08: Array List

An array list is a dynamic list that behaves like an array but can grow and shrink as needed.

This is often implemented with an underlying array and extra logic to manage resizing.

## Why it matters

Arrays are simple, but fixed-length arrays can be limiting. An array list adds flexibility while keeping the benefits of indexed access.

## Core idea

The structure stores items in a compact block of memory and keeps track of:

- the current size
- the backing array
- how many slots are used

When the array becomes full, it may resize to make more room.

## Common operations

- `add(value)`
- `get(index)`
- `set(index, value)`
- `remove(index)`
- `size()`

## Files in this chapter

- `ArrayList.js` – implementation of a list-like dynamic array

## Practice questions

- Why do array lists need resizing?
- What is the cost of inserting into the middle of a dynamic array?
- How is an array list different from a fixed-size array?
- Why is indexed access so efficient?

## Key takeaway

Array lists balance flexibility and speed. They are easy to index and simple to work with, but insertion and deletion in the middle can still be expensive.

---

Next, you will move to linked lists, which solve some of the problems caused by shifting array items.
