# Senior Interview Cheat Sheet

## 🎯 Quick Algorithm Selection Guide

### Problem → Solution Mapping

```
PROBLEM TYPE                          → ALGORITHM/PATTERN
─────────────────────────────────────────────────────────────
Find in sorted array                  → Binary Search O(log n)
Find in unsorted array                → Hash Set O(n)
Two numbers sum to target             → Two Pointers / Hash Map
Substring problems                    → Sliding Window
Find cycles in graph                  → DFS + Visited Set
Shortest path (weighted)              → Dijkstra O((V+E) log V)
Shortest path (unweighted)            → BFS O(V + E)
All paths between nodes               → DFS with backtracking
Dependency resolution                 → Topological Sort (DFS/BFS)
Autocomplete/prefix search            → Trie O(m) per operation
LRU cache                            → Hash Map + Doubly Linked List
Recent items cache                    → Queue or Hash Map
Overlapping subproblems               → Dynamic Programming
Making change/knapsack                → DP with memoization
Interval problems                     → Sort + Sweep Line
Find kth largest                      → Quick Select O(n) avg
Top K items                          → Min/Max Heap O(n log k)
```

## ⏱️ Time Complexity Cheat Sheet

```
COMPLEXITY    | NAME          | EXAMPLE
─────────────────────────────────────────────────
O(1)          | Constant      | Hash map lookup, array access
O(log n)      | Logarithmic   | Binary search, balanced BST
O(n)          | Linear        | Array scan, simple loop
O(n log n)    | Linearithmic  | Merge sort, heap sort, quick sort (avg)
O(n²)         | Quadratic     | Nested loops, bubble sort
O(2ⁿ)         | Exponential   | Fibonacci (naive), subsets
O(n!)         | Factorial     | Permutations, traveling salesman
```

## 📊 Data Structure Selection

```
NEED                              → USE
───────────────────────────────────────────────────
Fast lookup by key                → Hash Map (Object/Map)
Maintain order + fast access      → Array
Fast insert/delete at ends        → Deque (Array push/pop/shift/unshift)
Priority queue                    → Heap (Min/Max)
FIFO queue                        → Queue (Array with shift)
LIFO stack                        → Stack (Array with push/pop)
Prefix search                     → Trie
Range queries                     → Segment Tree
Union/Find connected components   → Union-Find (Disjoint Set)
LRU cache                        → Map + Doubly Linked List
Recent activity log              → Circular Buffer
```

## 🔥 Common Patterns

### 1. Two Pointers
```javascript
// Use when: Array is sorted, find pairs/triplets
let left = 0, right = arr.length - 1;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  else if (sum < target) left++;
  else right--;
}
```

### 2. Sliding Window
```javascript
// Use when: Contiguous subarray/substring problems
let left = 0, maxLen = 0;
const window = new Map();
for (let right = 0; right < arr.length; right++) {
  window.set(arr[right], (window.get(arr[right]) || 0) + 1);
  
  while (/* window invalid */) {
    window.set(arr[left], window.get(arr[left]) - 1);
    left++;
  }
  
  maxLen = Math.max(maxLen, right - left + 1);
}
```

### 3. Fast & Slow Pointers
```javascript
// Use when: Detect cycles, find middle
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true; // Cycle detected
}
```

### 4. DFS Template
```javascript
function dfs(node, visited) {
  if (!node || visited.has(node)) return;
  
  visited.add(node);
  // Process node
  
  for (const neighbor of node.neighbors) {
    dfs(neighbor, visited);
  }
}
```

### 5. BFS Template
```javascript
function bfs(start) {
  const queue = [start];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const node = queue.shift();
    // Process node
    
    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

### 6. Binary Search Template
```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}
```

### 7. Backtracking Template
```javascript
function backtrack(path, choices) {
  if (/* base case */) {
    result.push([...path]);
    return;
  }
  
  for (const choice of choices) {
    // Make choice
    path.push(choice);
    
    // Recurse
    backtrack(path, newChoices);
    
    // Undo choice
    path.pop();
  }
}
```

### 8. Dynamic Programming Template
```javascript
function dp(n) {
  const memo = new Array(n + 1).fill(0);
  memo[0] = base_case;
  
  for (let i = 1; i <= n; i++) {
    memo[i] = /* compute from previous states */;
  }
  
  return memo[n];
}
```

## 🚀 Web Performance: N+1 Quick Fix

### Detection
```javascript
// If you see this pattern:
for (const user of users) {
  user.posts = await db.query('...WHERE user_id = ?', [user.id]);
}
// ⚠️ N+1 PROBLEM!
```

### Solution 1: Batching (Easiest)
```javascript
const users = await db.query('SELECT * FROM users');
const userIds = users.map(u => u.id);
const posts = await db.query('SELECT * FROM posts WHERE user_id IN (?)', [userIds]);

// Group in memory
const postsMap = new Map();
posts.forEach(post => {
  if (!postsMap.has(post.user_id)) postsMap.set(post.user_id, []);
  postsMap.get(post.user_id).push(post);
});

users.forEach(user => user.posts = postsMap.get(user.id) || []);
```

### Solution 2: JOIN (Best for simple cases)
```javascript
const result = await db.query(`
  SELECT u.*, p.id as post_id, p.title
  FROM users u
  LEFT JOIN posts p ON u.id = p.user_id
`);
// Then group rows into objects
```

## 💡 Interview Communication Template

### 1. Clarify (30 seconds)
```
"Let me make sure I understand:
- Input: [describe input]
- Output: [describe output]
- Constraints: [size limits, special cases]
- Can I assume [important assumption]?"
```

### 2. Brainstorm (1-2 minutes)
```
"Here's my approach:
- Brute force: [explain] → O(n²) time, O(1) space
- Better approach: [explain] → O(n log n) time, O(n) space
- I'll go with the better approach because..."
```

### 3. Code (5-10 minutes)
```javascript
// Write clean, testable code with:
// - Clear variable names
// - Edge case handling
// - Comments for complex logic
```

### 4. Test (2-3 minutes)
```
"Let me test with:
- Normal case: [example]
- Edge case 1: empty input
- Edge case 2: single element
- Edge case 3: [problem-specific]"
```

### 5. Optimize (1-2 minutes)
```
"Trade-offs:
- Time: Currently O(n²), could optimize to O(n) with hash map
- Space: Currently O(1), would become O(n)
- I'd recommend [choice] because..."
```

## 🎓 Must-Know Concepts

### Big O Rankings (Best to Worst)
```
O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2ⁿ) > O(n!)
```

### Space Complexity Gotchas
- Recursion uses O(depth) space on call stack
- Hash maps/sets use O(n) space
- In-place algorithms use O(1) extra space

### When to Use What Sort
```
Nearly sorted data      → Insertion Sort O(n)
Random data (small)     → Quick Sort O(n log n) avg
Random data (large)     → Merge Sort O(n log n) guaranteed
Already sorted          → Tim Sort (Python default)
Need stability          → Merge Sort (preserves order)
Top K items            → Quick Select O(n) avg
```

## 🔧 JavaScript-Specific Tips

### Array Methods Complexity
```javascript
arr.push(x)      // O(1)
arr.pop()        // O(1)
arr.shift()      // O(n) - avoid in loops!
arr.unshift(x)   // O(n) - avoid in loops!
arr.splice()     // O(n)
arr.slice()      // O(n)
arr.concat()     // O(n+m)
```

### Object/Map Operations
```javascript
obj[key]           // O(1) average
Map.get(key)       // O(1) average
Map.set(key, val)  // O(1) average
Map.has(key)       // O(1) average
```

### Set Operations
```javascript
set.add(val)     // O(1) average
set.has(val)     // O(1) average
set.delete(val)  // O(1) average
```

## 📝 Common Mistakes to Avoid

1. ❌ Not asking clarifying questions
2. ❌ Jumping to code without explaining
3. ❌ Not discussing time/space complexity
4. ❌ Ignoring edge cases (null, empty, single element)
5. ❌ Using mutable operations on function parameters
6. ❌ Not testing your solution
7. ❌ Being silent while coding
8. ❌ Giving up too quickly

## ⚡ Quick Mental Calculations

### Is This Fast Enough?
```
Input Size  | Max Acceptable Complexity
─────────────────────────────────────────
n ≤ 10      | O(n!) - Anything works
n ≤ 20      | O(2ⁿ) - Exponential OK
n ≤ 100     | O(n³) - Cubic OK
n ≤ 1,000   | O(n²) - Quadratic OK
n ≤ 10,000  | O(n log n) - Usually required
n ≤ 100,000 | O(n) - Linear required
n > 1M      | O(log n) or O(1) - Must be very fast
```

## 🎯 Most Common Interview Problems

1. **Two Sum** → Hash Map, O(n)
2. **Valid Parentheses** → Stack, O(n)
3. **Merge Intervals** → Sort + Sweep, O(n log n)
4. **Binary Tree Traversal** → DFS/BFS, O(n)
5. **LRU Cache** → Map + DLL, O(1)
6. **Course Schedule** → Topological Sort, O(V+E)
7. **Word Search** → Backtracking, O(m*n*4ᵏ)
8. **Longest Substring** → Sliding Window, O(n)
9. **Clone Graph** → DFS + Map, O(V+E)
10. **Meeting Rooms** → Sort + Greedy, O(n log n)

---

## 📚 Print This Page!

This is your quick reference during practice. Keep it handy!
