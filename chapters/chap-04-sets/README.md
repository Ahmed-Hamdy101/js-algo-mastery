# Chapter 04: Sets

A set is a collection of unique values.

Unlike arrays, a set does not allow duplicates, and it is optimized for membership checks.

## Why it matters

Sets are useful when you need to know quickly whether a value already exists.

Common use cases include:

- deduplicating data
- checking membership
- tracking seen values
- comparing collections

## Main idea

A set stores values in a way that makes existence checks very fast on average.

For example, you can ask:

- Is `apple` already in the set?
- Have I seen this value before?

and get a quick answer.

## Files in this chapter

- `01-set.js` – basic set implementation and behavior

## Set operations

Typical operations include:

- add(value)
- has(value)
- delete(value)
- clear()
- size

## Example

```js
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2);

console.log(numbers); // Set(2) { 1, 2 }
```

The duplicate `2` is ignored because sets only store unique values.

## Practice questions

- What is the difference between an array and a set?
- Why are sets useful for deduplication?
- What does `has` do in a set?
- When would you prefer a set over a list?

## Key takeaway

Sets are best when you care about uniqueness and fast membership checks rather than ordering or duplicate values.

---

The next chapter introduces maps, which store key-value pairs instead of just unique elements.
