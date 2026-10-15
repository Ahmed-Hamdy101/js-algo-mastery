# Chapter 13: Functional Programming

Functional programming is a style of writing code where functions are the main building blocks.

Instead of changing data directly, you usually:

- pass data into functions
- return new values
- avoid mutation
- reuse small logic pieces

## Why it matters

Functional programming helps you write code that is:

- easier to test
- easier to reason about
- less error-prone
- more reusable

It is especially useful when working with arrays, transformations, and data pipelines.

## Core idea

In normal imperative style, you often mutate variables while looping.

Example:

```js
let total = 0;

for (let i = 0; i < [1, 2, 3].length; i++) {
  total += [1, 2, 3][i];
}

console.log(total);
```

In functional style, you prefer transformations:

```js
const numbers = [1, 2, 3];

const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(total);
```

The result is the same, but the code is cleaner and more declarative.

## Pure functions

A pure function always returns the same output for the same input and does not change outside state.

```js
function add(a, b) {
  return a + b;
}
```

This is pure because:

- same input -> same output
- no outside mutation

## Side effects

A side effect happens when a function changes something outside itself, such as:

- updating a global variable
- writing to a file
- modifying an array in place

Example of a side effect:

```js
let count = 0;

function increase() {
  count++;
}
```

A better functional approach is:

```js
function increase(value) {
  return value + 1;
}
```

## Immutability

Instead of changing an existing array or object, functional programming usually creates a new one.

Bad:

```js
const nums = [1, 2, 3];
nums.push(4);
```

Good:

```js
const nums = [1, 2, 3];
const newNums = [...nums, 4];
```

This avoids unexpected mutation.

## Higher-order functions

A higher-order function is a function that accepts another function or returns one.

This is a huge part of functional programming.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled);
```

Here, `map` is a higher-order function because it takes a callback function.

## Common functional tools in JavaScript

### map()

Transforms every item in an array.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

### filter()

Keeps only items that match a condition.

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);

console.log(evens); // [2, 4]
```

### reduce()

Combines all items into a single value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, n) => total + n, 0);

console.log(sum); // 10
```

### find()

Finds the first item that matches a condition.

```js
const users = [
  { id: 1, name: 'Ahmed' },
  { id: 2, name: 'Maria' }
];

const user = users.find(u => u.name === 'Maria');
console.log(user);
```

## Recursion

A recursive function calls itself to solve a smaller version of the same problem.

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

This is a classic functional programming pattern.

## Why functional programming is useful

Functional programming helps with:

- cleaner logic
- less accidental mutation
- easier debugging
- reusable functions
- code that reads more like a description of the transformation

Instead of writing procedures step by step, you describe what transformation you want.

## Example in real code

```js
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 }
];

const expensiveProducts = products
  .filter(p => p.price > 700)
  .map(p => p.name);

console.log(expensiveProducts);
```

This is a very common functional programming pattern.

## Important reality

Functional programming is not about saying “never use loops” or “never use objects”.

It is more about:

- using functions to model behavior
- avoiding mutation when possible
- transforming data in a clear pipeline

## Beginner checklist

If you are just starting, focus on these ideas first:

- pure functions
- immutability
- `map()`
- `filter()`
- `reduce()`
- small reusable functions

## Key takeaway

Functional programming is a way of thinking about code as transformations of data.

You write functions that take values, return new values, and avoid messy side effects.

This is one of the main styles used in JavaScript and modern app development.

## Practice questions

- What is a pure function?
- Why is immutability useful?
- What is the difference between mutating an array and creating a new array?
- What does `map()` do?
- What does `filter()` do?
- What does `reduce()` do?
- Why is functional programming helpful in larger applications?

## Next step

After understanding functional programming, you can start combining it with arrays, objects, and real app data handling. This style is especially common in React, Node.js, and backend APIs.
