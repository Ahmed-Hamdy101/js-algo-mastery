# Chapter 01: Fundamentals

This chapter introduces the building blocks behind all later data structure and algorithm work.

The main ideas here are:

- time complexity
- searching patterns
- recursion
- how functions scale as input grows

## Why it matters

Before learning trees, sorting, or hash tables, you need to understand how to think about performance.

A good algorithm is not only correct, but also efficient.

## Key topics

### Big O notation

Big O helps you estimate how algorithm runtime grows as the input size increases.

Examples:

- `O(1)` = constant time
- `O(log n)` = logarithmic time
- `O(n)` = linear time
- `O(n log n)` = efficient sorting time
- `O(n^2)` = quadratic time

### Searching

You learn how different search strategies behave on arrays and collections.

### Recursion

Recursion is when a function calls itself to solve a smaller version of the same problem.

This is especially useful for:

- factorial
- Fibonacci
- tree traversal
- divide and conquer algorithms

## Files in this chapter

- `01-big-o.js` – big O and complexity examples
- `02-haystack.js` – searching and lookup examples
- `03-recursion.js` – recursive patterns
- `04-fibonacci.js` – Fibonacci implementations

## Example mindset

When you read a function, ask:

- What is the input size?
- How many times does the loop run?
- Does the function call itself?
- Is memory being reused or duplicated?

## Practice questions

- What is the difference between `O(n)` and `O(log n)`?
- Why is recursion risky if it never reaches a base case?
- How would you describe the runtime of a linear search?
- Why do we care about algorithm efficiency in interviews?

## Key takeaway

This chapter gives you the language and mental model for analyzing code before optimizing or comparing solutions.

---

Next, move on to sorting algorithms to see how order and structure affect efficiency.
