# Chapter 12: Hash Table

A hash table stores data in a way that allows very fast lookup, insertion, and deletion on average.

The main idea is simple:

- convert a key into an index using a hash function
- store the value at that index
- retrieve it later using the same hash

## Why this chapter matters

Hash tables are one of the most important data structures in programming.

They are used in:

- object and map implementations
- caching systems
- database indexing
- frequency counting
- lookup-heavy applications

## Core idea

A hash function turns a string or key into a number:

```js
function hash(input, max) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    total += input.charCodeAt(i);
  }

  return total % max;
}
```

This number is then used as the index in an array.

### In plain English

Instead of searching through every item one by one, we compute a key and directly jump to the storage spot.

So we do:

```text
key -> hash -> index -> value
```

That is the main purpose of hashing.

## Basic structure

The code in this chapter uses a simple array-based hash table:

```js
class HashTable {
  constructor() {
    this.table = new Array(255);
  }
}
```

Then it stores values by index:

```js
this.table[this.hash(input, 255)] = input;
```

This is a simple example of how hashing maps keys to slots.

## Important concept: collisions

A collision happens when two different keys produce the same hash index.

Example:

- `hello`
- `olleh`

may produce the same total under some patterns, especially in simple code.

Real hash tables handle collisions using strategies such as:

- chaining
- linear probing
- quadratic probing
- double hashing

This chapter keeps the implementation simple to help you understand the core idea before collision handling is introduced in more advanced systems.

## File in this chapter

- `hash-table.js` – a simple hash table implementation with add, check, and hashing logic

## How the example works

The example does the following:

1. create an empty table
2. hash the input string
3. place the value at that index
4. check whether the same key exists later

## Example

```js
const hash = new HashTable();
hash.add('hello');
console.log(hash.check('hello'));
```

This shows the basic idea: data can be stored and looked up quickly using a computed index.

## Time complexity

With a good hash function and a reasonable load factor, a hash table gives:

- average insert: `O(1)`
- average lookup: `O(1)`
- average delete: `O(1)`

In the worst case, if many collisions occur, performance can degrade.

## Real-world understanding: why we actually use it

Hashing is not just a classroom idea. It is used whenever you want quick access by a key.

### Login example

```js
const users = new Map();

users.set('ahmed@email.com', {
  id: 1,
  name: 'Ahmed',
  password: '123456'
});

const user = users.get('ahmed@email.com');
console.log(user.name);
```

This is a real login pattern:

- email is the key
- user data is the value
- `get(email)` lets us find the user without scanning all users

### Product or order lookup

```js
const orders = new Map();
orders.set('order-101', { total: 250, status: 'paid' });

const order = orders.get('order-101');
console.log(order.status);
```

This is the same pattern for product IDs, order IDs, cart items, and cache keys.

## Logout and memory

A very important real-world note:

If you store session data in a `Map`, it stays in memory while the app is running.

```js
const sessions = new Map();
sessions.set('token-123', { userId: 1 });

function logout(token) {
  sessions.delete(token);
}
```

When the user logs out, you usually remove the session entry.

Otherwise, the session key may still exist in memory.

This is why production apps often separate:

- permanent data in a database
- active session data in memory or Redis
- cached temporary data in fast-access stores

## How hashing helps with N+1 and O(n)

The N+1 problem happens when your code does one lookup, then loops and does another lookup for every item.

Example of the slow pattern:

```js
for (const user of users) {
  const profile = findProfileByUserId(user.id);
}
```

This may cause many repeated searches.

Instead, we can build a lookup once:

```js
const profileCache = new Map();

for (const profile of profiles) {
  profileCache.set(profile.userId, profile);
}

for (const user of users) {
  const profile = profileCache.get(user.id);
  console.log(profile);
}
```

This reduces repeated searching and helps avoid unnecessary O(n) work.

## Key takeaway

Hash tables are powerful because they let you use an array-like structure for near-constant-time lookups.

They are one of the most practical data structures in real-world software engineering.

In real apps, you use them for:

- login lookups
- session storage
- product and order lookups
- caches
- avoiding repeated N+1 searches

## Practice questions

- What is a hash function?
- Why do collisions happen?
- How does a hash table differ from an array?
- What happens when many keys map to the same index?
- Why is hashing useful for dictionary-style lookups?
- How can a hash map help avoid O(n) repeated lookups?

## Next step

Once you understand hashing, continue exploring other chapters that build on these ideas in tables, sets, and tree-based structures.

## Practice questions

- What is a hash function?
- Why do collisions happen?
- How does a hash table differ from an array?
- What happens when many keys map to the same index?
- Why is hashing useful for dictionary-style lookups?

## Next step

Once you understand hashing, continue exploring other chapters that build on these ideas in tables, sets, and tree-based structures.
