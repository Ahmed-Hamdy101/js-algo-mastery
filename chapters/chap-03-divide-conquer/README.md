# Chapter 03: Divide and Conquer

Divide and conquer is a strategy for solving problems by splitting them into smaller subproblems, solving each one, and combining the results.

This pattern appears in many algorithms, especially sorting and searching.

## Why it matters

Instead of solving a large problem directly, you break it into smaller pieces that are easier to manage.

This often reduces runtime dramatically.

## Main idea

A divide-and-conquer solution follows three steps:

1. Divide the problem into smaller parts
2. Conquer each part independently
3. Combine the answers

## Example in this chapter

This chapter focuses on quick sort, which is a classic divide-and-conquer algorithm.

Quick sort works by:

- choosing a pivot
- placing smaller items to the left
- placing larger items to the right
- recursively sorting the partitions

## Files in this chapter

- `01-quick-sort.js` – quick sort implementation
- `quick-sort.md` – notes and explanations about the algorithm

## Why quick sort is important

Quick sort is efficient in practice and widely used in real systems.

It is a great example of how recursion and partitioning work together.

## Practice questions

- What is the pivot in quick sort?
- Why does partitioning help the algorithm?
- What makes divide and conquer different from simple iteration?
- When does quick sort perform poorly?

## Key takeaway

Divide and conquer is a fundamental approach in algorithm design. It teaches you to break a problem into manageable parts instead of tackling everything at once.

---

After this, you will move into sets and maps, which organize data in ways that support efficient lookup and membership tests.
