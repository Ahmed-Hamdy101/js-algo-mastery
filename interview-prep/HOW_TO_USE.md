# How to Use This Senior Interview Practice Directory

## Quick Start

### 1. Run the Quiz
```bash
cd interview-prep/04-quiz
node interactive-quiz.js
```

This will test your knowledge across 6 levels:
- Level 1: Time & Space Complexity
- Level 2: Data Structures
- Level 3: Algorithm Problems
- Level 4: Web Performance
- Level 5: System Design
- Level 6: Advanced Code Problems

**Your score determines your level:**
- 90%+ → Senior Level ✅
- 75-90% → Mid-Senior Level
- 60-75% → Keep Practicing
- <60% → Review Fundamentals

### 2. Practice Advanced Algorithms
```bash
cd interview-prep/01-advanced-algorithms
node exercises.js
```

**Covers:**
- ✅ LRU Cache Implementation
- ✅ Rate Limiter (Sliding Window)
- ✅ Trie (Autocomplete)

**Real-world uses:**
- Session caching
- API rate limiting
- Search autocomplete

### 3. Learn N+1 Query Solutions
```bash
cd interview-prep/03-web-performance
node n-plus-1-solutions.js
```

**You'll see:**
- ❌ BAD: N+1 Problem Demo (101 queries!)
- ✅ GOOD: Batching Solution (2 queries)
- ✅ GOOD: Caching Solution (0-2 queries)

**This demonstrates:**
- How to detect N+1 problems
- Multiple solutions (JOIN, DataLoader, Batching, Caching)
- Query monitoring middleware

### 4. Practice Graph Algorithms
```bash
cd interview-prep/02-graph-algorithms
node graph-exercises.js
```

**Includes:**
- Course scheduling (cycle detection)
- Graph cloning
- Dijkstra's algorithm (shortest path)
- Social network (friend suggestions)
- Package dependency resolver

## Study Path

### For Beginners (Score < 60%)
1. Review basics in main chapters (chapters/chap-01-fundamentals-chapters/chap-09-linked-list)
2. Focus on time/space complexity
3. Master basic data structures
4. Take quiz again in 1 week

### For Intermediate (Score 60-75%)
1. Practice all exercises in order
2. Implement solutions without looking
3. Run tests and understand failures
4. Study real-world examples
5. Retake quiz daily

### For Advanced (Score 75-90%)
1. Skip to graph algorithms
2. Focus on system design concepts
3. Optimize existing solutions
4. Create your own variations
5. Practice explaining solutions

### For Senior Level (Score > 90%)
1. Mock interviews with timer
2. System design deep dives
3. Build real projects using patterns
4. Teach others (best way to learn)

## Understanding N+1 Problems

### What is N+1?
```javascript
// BAD - Makes 1 + N queries
const users = await db.query('SELECT * FROM users'); // 1 query
for (const user of users) {
  user.posts = await db.query(
    'SELECT * FROM posts WHERE user_id = ?', 
    [user.id]
  ); // N queries (one per user)
}
// Total: 1 + 100 = 101 queries for 100 users! 😱
```

### Solution 1: JOIN (1 query)
```javascript
// GOOD - One query with JOIN
const result = await db.query(`
  SELECT u.*, p.*
  FROM users u
  LEFT JOIN posts p ON u.id = p.user_id
`);
// Then group in memory
// Total: 1 query ✅
```

### Solution 2: Batching (2 queries)
```javascript
// GOOD - Two queries with batching
const users = await db.query('SELECT * FROM users'); // Query 1
const userIds = users.map(u => u.id);
const posts = await db.query(
  'SELECT * FROM posts WHERE user_id IN (?)',
  [userIds]
); // Query 2 (gets ALL posts at once)
// Then group in memory
// Total: 2 queries ✅
```

### Solution 3: DataLoader (2 queries + caching)
```javascript
// GOOD - Batches requests automatically
const postLoader = new DataLoader(async (userIds) => {
  const posts = await db.query(
    'SELECT * FROM posts WHERE user_id IN (?)',
    [userIds]
  );
  return groupByUserId(posts, userIds);
});

// These will be batched automatically!
await Promise.all(
  users.map(async user => {
    user.posts = await postLoader.load(user.id);
  })
);
// Total: 2 queries + automatic caching ✅✅
```

## How to Detect N+1 in Your Code

### 1. Enable Query Logging
```javascript
// Add this to your app
app.use((req, res, next) => {
  req.queryCount = 0;
  const originalQuery = db.query;
  
  db.query = function(...args) {
    req.queryCount++;
    console.log(`Query ${req.queryCount}: ${args[0]}`);
    return originalQuery.apply(this, args);
  };
  
  res.on('finish', () => {
    console.log(`Total queries: ${req.queryCount}`);
    if (req.queryCount > 10) {
      console.warn('⚠️  Possible N+1 problem!');
    }
  });
  
  next();
});
```

### 2. Use the Query Monitor
```javascript
const { QueryMonitor } = require('./03-web-performance/n-plus-1-solutions');

const monitor = new QueryMonitor();
// ... make your queries ...
monitor.report(); // Shows N+1 patterns
```

### 3. Watch for Patterns
```
Query 1: SELECT * FROM users
Query 2: SELECT * FROM posts WHERE user_id = 1  ← 
Query 3: SELECT * FROM posts WHERE user_id = 2  ← Same pattern!
Query 4: SELECT * FROM posts WHERE user_id = 3  ← 
Query 5: SELECT * FROM posts WHERE user_id = 4  ← N+1 PROBLEM!
```

## Common Interview Questions & Where to Find Answers

| Question | File | Concept |
|----------|------|---------|
| "Implement an LRU cache" | 01-advanced-algorithms/exercises.js | Map + O(1) operations |
| "Design a rate limiter" | 01-advanced-algorithms/exercises.js | Sliding window |
| "Build autocomplete" | 01-advanced-algorithms/exercises.js | Trie data structure |
| "Detect cycles in graph" | 02-graph-algorithms/graph-exercises.js | DFS + recursion stack |
| "Find shortest path" | 02-graph-algorithms/graph-exercises.js | Dijkstra's algorithm |
| "Optimize database queries" | 03-web-performance/n-plus-1-solutions.js | N+1 solutions |
| "Design social network" | 02-graph-algorithms/graph-exercises.js | Graph BFS/DFS |
| "Package dependencies" | 02-graph-algorithms/graph-exercises.js | Topological sort |

## Tips for Interviews

### Before the Interview
1. ✅ Run all exercises at least twice
2. ✅ Understand time/space complexity
3. ✅ Practice explaining solutions out loud
4. ✅ Review common patterns (sliding window, two pointers, etc.)

### During the Interview
1. 🎯 Ask clarifying questions first
2. 🎯 Start with brute force solution
3. 🎯 Explain trade-offs before optimizing
4. 🎯 Write clean, testable code
5. 🎯 Think out loud
6. 🎯 Discuss edge cases

### Red Flags to Avoid
- ❌ Jumping to code immediately
- ❌ Not discussing complexity
- ❌ Ignoring edge cases
- ❌ Not testing your solution
- ❌ Being silent while coding

## Practice Schedule

### Week 1: Foundations
- Day 1: Take quiz, review basics
- Day 2: LRU Cache implementation
- Day 3: Rate limiter implementation
- Day 4: Trie implementation
- Day 5: Retake quiz
- Weekend: Build a mini-project

### Week 2: Graphs
- Day 1: Cycle detection
- Day 2: Graph cloning
- Day 3: Dijkstra's algorithm
- Day 4: Social network implementation
- Day 5: Package resolver
- Weekend: Build dependency tracker

### Week 3: Web Performance
- Day 1: Understand N+1 problem
- Day 2: Practice detection
- Day 3: Implement batching
- Day 4: Implement caching
- Day 5: Build monitoring tool
- Weekend: Optimize real project

### Week 4: Mock Interviews
- Day 1-3: Timed practice problems
- Day 4-5: System design questions
- Weekend: Full mock interview

## Resources

### Books
- "Cracking the Coding Interview" by Gayle Laakmann McDowell
- "System Design Interview" by Alex Xu
- "Designing Data-Intensive Applications" by Martin Kleppmann

### Online Practice
- LeetCode (focus on Medium/Hard)
- HackerRank
- CodeSignal
- Pramp (mock interviews)

### This Repository
- Review fundamentals: chapters/chap-01-fundamentals-chapters/chap-09-linked-list
- Practice interviews: interview-prep/
- Build projects: Apply patterns to real apps

## Next Steps

1. **Take the quiz**: `cd 04-quiz && node interactive-quiz.js`
2. **Fix N+1 problems**: `cd 03-web-performance && node n-plus-1-solutions.js`
3. **Practice algorithms**: `cd 01-advanced-algorithms && node exercises.js`
4. **Master graphs**: `cd 02-graph-algorithms && node graph-exercises.js`
5. **Build projects**: Apply to your own applications!

Good luck! 🚀
