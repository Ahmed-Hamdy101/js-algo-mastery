# Chapter 02: Sorting

Sorting is one of the most important topics in computer science because many problems depend on ordered data.

A sorted dataset makes searching easier and helps with comparisons, grouping, and optimization.

## Why it matters

Different sorting algorithms have different trade-offs:

- some are simple but slow
- some are faster but more complex
- some are best for small lists
- others scale better for large input

## Core sorting ideas

This chapter explores common sorting methods such as:

- insertion sort
- merge sort
- bubble sort
- median-related sorting ideas

## Main concepts

### Insertion sort

Insertion sort builds the final sorted array one item at a time.

It is easy to understand and works well for small inputs.

### Merge sort

Merge sort uses divide and conquer:

1. split the list into halves
2. sort each half
3. merge the sorted halves back together

This gives better performance than many simple quadratic methods.

### Bubble sort

Bubble sort repeatedly compares adjacent values and swaps them if needed.

It is simple, but not the fastest for large inputs.

## Files in this chapter

- `01-insertion-sort.js` – insertion sort implementation
- `02-MergeSort.js` – merge sort implementation
- `03-Median.js` – median-related sorting problem
- `05-buble-sort.js` – bubble sort example

## Practice questions

- Which sorting algorithm is easiest to explain?
- Why does merge sort usually perform better than bubble sort?
- When would you choose insertion sort over a more advanced algorithm?
- What does it mean to sort in place vs out of place?

## Key takeaway

Sorting is not just about rearranging values. It is also about choosing the right algorithm for the problem size and constraints.

---

The next chapter builds on this by introducing divide-and-conquer thinking more formally.
