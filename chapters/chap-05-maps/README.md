# Chapter 05: Maps

A map stores data as key-value pairs.

This is different from a set, which stores only unique values. In a map, each key is associated with a value.

## Why it matters

Maps are extremely common in real-world apps because they let you associate data efficiently.

Examples:

- user ID -> user profile
- word -> frequency count
- country -> capital city
- URL -> cached response

## Main idea

A map allows quick lookup using a key.

```js
const userScores = new Map();
userScores.set('alice', 90);
userScores.set('bob', 85);

console.log(userScores.get('alice')); // 90
```

## Files in this chapter

- `map.js` – a basic map implementation and usage

## Common operations

- `set(key, value)`
- `get(key)`
- `has(key)`
- `delete(key)`
- `clear()`
- `size`

## Difference from objects

Objects can act like maps in JavaScript, but `Map` is often more explicit and better for dynamic key-value storage.

A `Map` also preserves insertion order and supports non-string keys.

## Practice questions

- What is the difference between a set and a map?
- Why is a map useful for lookup-heavy code?
- When would you prefer a map over a plain object?
- How does a map support key-based access?

## Key takeaway

Maps are ideal when you need to connect data by a meaningful key and retrieve values efficiently.

---

After this, the next chapters move into linear structures like stacks and queues.
