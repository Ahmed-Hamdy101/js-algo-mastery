# Fundamentals Practice

Practice the basics here until they feel automatic.

## Focus
- Big O
- Recursion
- Arrays
- Searching
- Fibonacci

## Exercise format

1. Read the chapter note.
2. Implement without looking.
3. Run Node.
4. Explain the complexity.
5. Add one variation.

## Technical questions

- What is Big O and why does it matter?
- What is the difference between O(n), O(log n), and O(n log n)?
- How do recursion and base cases work together?
- When would you choose a recursive solution?
- What happens in the worst-case for a linear search?

## Answers
- Big O describes how the runtime or memory usage of an algorithm grows as the input size increases.
- It helps us compare different solutions and predict how they scale as the amount of work grows.
- For example, O(n) grows linearly, while O(n^2) grows much faster as the input gets larger.
- O(n) does not mean "n threads." It means the code performs about n operations in one thread, one after another.
- If n = 5, the loop runs about 5 times. If n = 1000, it runs about 1000 times. The CPU executes those steps sequentially, and the total work grows linearly.

## Big O in plain English

Big O tells us how much work an algorithm does as the input grows.

Example:

```js
function findNumber(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

This is O(n), because in the worst case it checks every item in the array.

If the array has 10 items, it may do about 10 checks.
If the array has 10,000 items, it may do about 10,000 checks.

Another example:

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

This is O(log n), because each step cuts the search space in half.

That is why O(log n) is faster than O(n) for large inputs.

Short interview version:

> Big O tells us how the cost of an algorithm grows with input size, so we can compare approaches and choose the one that scales better for large workloads.

## Example files

- big-o.js — linear search and Big O review
- recursion.js — countdown recursion and base-case practice
- arrays.js — array operations and mutation patterns
- searching.js — binary search practice
- fibonacci.js — recursive Fibonacci example

## Interview prompts

- Explain this concept to a beginner.
- What is the trade-off between recursion and iteration?
- Why is Fibonacci often a recursion trap?
- Can you write one version from memory and one optimized version?

## Self-check

Before moving on, you should be able to:
- explain the logic out loud
- code it without notes
- state the time and space complexity
- describe at least one edge case
