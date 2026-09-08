/**
 * SENIOR LEVEL INTERVIEW QUIZ
 * 
 * Progressive difficulty levels with automatic scoring
 * Try to solve without looking at answers!
 */

// ============================================
// QUIZ SYSTEM
// ============================================

class Quiz {
  constructor() {
    this.score = 0;
    this.totalQuestions = 0;
    this.currentLevel = 1;
  }

  ask(question, yourAnswer, correctAnswer, explanation) {
    this.totalQuestions++;
    const correct = yourAnswer === correctAnswer;
    
    if (correct) {
      this.score++;
      console.log(`✅ Correct! ${explanation}`);
    } else {
      console.log(`❌ Wrong. Your answer: ${yourAnswer}, Correct: ${correctAnswer}`);
      console.log(`   ${explanation}`);
    }
    
    return correct;
  }

  level(levelNum, levelName) {
    this.currentLevel = levelNum;
    console.log(`\n${'='.repeat(50)}`);
    console.log(`LEVEL ${levelNum}: ${levelName}`);
    console.log('='.repeat(50));
  }

  results() {
    const percentage = (this.score / this.totalQuestions * 100).toFixed(1);
    console.log(`\n${'='.repeat(50)}`);
    console.log('FINAL RESULTS');
    console.log('='.repeat(50));
    console.log(`Score: ${this.score}/${this.totalQuestions} (${percentage}%)`);
    
    if (percentage >= 90) {
      console.log('🏆 Outstanding! Senior level achieved!');
    } else if (percentage >= 75) {
      console.log('🎯 Great! Mid-Senior level');
    } else if (percentage >= 60) {
      console.log('📚 Good! Keep practicing');
    } else {
      console.log('💪 Review the concepts and try again');
    }
  }
}

// ============================================
// LEVEL 1: TIME & SPACE COMPLEXITY
// ============================================

const quiz = new Quiz();

quiz.level(1, 'Time & Space Complexity');

// Question 1.1
console.log('\nQ1.1: What is the time complexity of this code?');
console.log(`
  function findDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return -1;
  }
`);
console.log('Options: a) O(1), b) O(n), c) O(n²), d) O(log n)');

// YOUR ANSWER: Change 'a' to your answer
quiz.ask(
  'Q1.1',
  'b', // <-- Change this to your answer
  'b',
  'O(n) - We iterate through array once, Set operations are O(1)'
);

// Question 1.2
console.log('\nQ1.2: What is the space complexity of this code?');
console.log(`
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
`);
console.log('Options: a) O(1), b) O(n), c) O(2^n), d) O(log n)');

// YOUR ANSWER:
quiz.ask(
  'Q1.2',
  'b', // <-- Change this to your answer
  'b',
  'O(n) - Call stack depth is n (though time complexity is O(2^n))'
);

// Question 1.3
console.log('\nQ1.3: What is the time complexity of this code?');
console.log(`
  function findPairs(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [i, j];
        }
      }
    }
    return null;
  }
`);
console.log('Options: a) O(n), b) O(n log n), c) O(n²), d) O(2^n)');

// YOUR ANSWER:
quiz.ask(
  'Q1.3',
  'c', // <-- Change this to your answer
  'c',
  'O(n²) - Nested loops iterate through array'
);

// ============================================
// LEVEL 2: DATA STRUCTURES
// ============================================

quiz.level(2, 'Data Structures');

// Question 2.1
console.log('\nQ2.1: Which data structure is best for implementing autocomplete?');
console.log('Options: a) Array, b) Hash Map, c) Trie, d) Binary Search Tree');

// YOUR ANSWER:
quiz.ask(
  'Q2.1',
  'c', // <-- Change this to your answer
  'c',
  'Trie - Optimized for prefix search with O(m) time where m is prefix length'
);

// Question 2.2
console.log('\nQ2.2: Which data structure provides O(1) average case for insert, delete, and search?');
console.log('Options: a) Array, b) Linked List, c) Hash Map, d) Binary Search Tree');

// YOUR ANSWER:
quiz.ask(
  'Q2.2',
  'c', // <-- Change this to your answer
  'c',
  'Hash Map - Provides O(1) average case for all three operations'
);

// Question 2.3
console.log('\nQ2.3: What data structure is used to implement browser back/forward?');
console.log('Options: a) Queue, b) Stack, c) Two Stacks, d) Linked List');

// YOUR ANSWER:
quiz.ask(
  'Q2.3',
  'c', // <-- Change this to your answer
  'c',
  'Two Stacks - One for back history, one for forward history'
);

// ============================================
// LEVEL 3: ALGORITHM PROBLEMS
// ============================================

quiz.level(3, 'Algorithm Problems');

// Question 3.1
console.log('\nQ3.1: What algorithm is best for finding shortest path in weighted graph?');
console.log('Options: a) DFS, b) BFS, c) Dijkstra, d) Binary Search');

// YOUR ANSWER:
quiz.ask(
  'Q3.1',
  'c', // <-- Change this to your answer
  'c',
  "Dijkstra's algorithm - Optimal for shortest path in weighted graphs with non-negative weights"
);

// Question 3.2
console.log('\nQ3.2: Which sorting algorithm is most efficient for nearly sorted data?');
console.log('Options: a) Quick Sort, b) Merge Sort, c) Insertion Sort, d) Heap Sort');

// YOUR ANSWER:
quiz.ask(
  'Q3.2',
  'c', // <-- Change this to your answer
  'c',
  'Insertion Sort - O(n) for nearly sorted data, works by inserting elements into sorted portion'
);

// Question 3.3
console.log('\nQ3.3: What technique is best for solving overlapping subproblems?');
console.log('Options: a) Greedy, b) Divide and Conquer, c) Dynamic Programming, d) Backtracking');

// YOUR ANSWER:
quiz.ask(
  'Q3.3',
  'c', // <-- Change this to your answer
  'c',
  'Dynamic Programming - Stores solutions to subproblems to avoid recomputation'
);

// ============================================
// LEVEL 4: WEB PERFORMANCE
// ============================================

quiz.level(4, 'Web Performance & Optimization');

// Question 4.1
console.log('\nQ4.1: What is the N+1 query problem?');
console.log('Options:');
console.log('a) Making N+1 API calls instead of 1');
console.log('b) Making 1 query then N additional queries for related data');
console.log('c) Having N+1 items in cache');
console.log('d) Having N+1 database connections');

// YOUR ANSWER:
quiz.ask(
  'Q4.1',
  'b', // <-- Change this to your answer
  'b',
  'Making 1 initial query then N additional queries for each result - common in ORMs'
);

// Question 4.2
console.log('\nQ4.2: Best solution for N+1 problem with REST API?');
console.log('Options: a) Caching, b) JOIN query, c) Batching, d) Pagination');

// YOUR ANSWER:
quiz.ask(
  'Q4.2',
  'c', // <-- Change this to your answer
  'c',
  'Batching - Collect all IDs then fetch related data in one query (or JOIN works too)'
);

// Question 4.3
console.log('\nQ4.3: What is the main advantage of LRU cache over FIFO?');
console.log('Options:');
console.log('a) Faster insertion');
console.log('b) Less memory usage');
console.log('c) Keeps frequently accessed items');
console.log('d) Simpler implementation');

// YOUR ANSWER:
quiz.ask(
  'Q4.3',
  'c', // <-- Change this to your answer
  'c',
  'LRU keeps frequently accessed items by removing least recently used, not just oldest'
);

// ============================================
// LEVEL 5: SYSTEM DESIGN
// ============================================

quiz.level(5, 'System Design Concepts');

// Question 5.1
console.log('\nQ5.1: Which pattern best handles high-traffic API endpoints?');
console.log('Options: a) Rate Limiting, b) Load Balancing, c) Caching, d) All of the above');

// YOUR ANSWER:
quiz.ask(
  'Q5.1',
  'd', // <-- Change this to your answer
  'd',
  'All of the above - Rate limiting prevents abuse, load balancing distributes traffic, caching reduces load'
);

// Question 5.2
console.log('\nQ5.2: Best way to handle eventual consistency in distributed systems?');
console.log('Options:');
console.log('a) Use locks everywhere');
console.log('b) Accept stale reads and use conflict resolution');
console.log('c) Avoid distributed systems');
console.log('d) Use synchronous replication only');

// YOUR ANSWER:
quiz.ask(
  'Q5.2',
  'b', // <-- Change this to your answer
  'b',
  'Accept eventual consistency with conflict resolution - locks hurt performance in distributed systems'
);

// Question 5.3
console.log('\nQ5.3: What is the CAP theorem about?');
console.log('Options:');
console.log('a) You can only have 2 of 3: Consistency, Availability, Partition tolerance');
console.log('b) You must have all 3 at all times');
console.log('c) You can only have 1 of 3');
console.log('d) It only applies to SQL databases');

// YOUR ANSWER:
quiz.ask(
  'Q5.3',
  'a', // <-- Change this to your answer
  'a',
  'CAP: Can only guarantee 2 of 3. In reality, network partitions happen, so choose CP or AP'
);

// ============================================
// LEVEL 6: CODE PROBLEMS (HARDER)
// ============================================

quiz.level(6, 'Advanced Code Problems');

// Question 6.1
console.log('\nQ6.1: Time complexity to find kth largest element using QuickSelect?');
console.log('Options: a) O(n), b) O(n log n), c) O(k log n), d) O(n²)');

// YOUR ANSWER:
quiz.ask(
  'Q6.1',
  'a', // <-- Change this to your answer
  'a',
  'O(n) average case using QuickSelect - better than sorting which is O(n log n)'
);

// Question 6.2
console.log('\nQ6.2: What pattern solves "find all anagrams in a string"?');
console.log('Options: a) Two Pointers, b) Sliding Window, c) Binary Search, d) DFS');

// YOUR ANSWER:
quiz.ask(
  'Q6.2',
  'b', // <-- Change this to your answer
  'b',
  'Sliding Window - Maintain character frequency in fixed-size window'
);

// Question 6.3
console.log('\nQ6.3: Best approach for detecting cycles in directed graph?');
console.log('Options: a) BFS, b) DFS with recursion stack, c) Union-Find, d) Dijkstra');

// YOUR ANSWER:
quiz.ask(
  'Q6.3',
  'b', // <-- Change this to your answer
  'b',
  'DFS with recursion stack - Track nodes in current path to detect back edges'
);

// ============================================
// CODING CHALLENGES
// ============================================

console.log('\n' + '='.repeat(50));
console.log('BONUS: CODING CHALLENGES');
console.log('='.repeat(50));

console.log(`
For the following problems, implement the solutions in code:

CHALLENGE 1: Implement LRU Cache
- get(key) in O(1)
- put(key, value) in O(1)
- Automatically evicts least recently used item when full

CHALLENGE 2: Design Rate Limiter
- Allow N requests per time window
- Sliding window (not fixed)
- Per-user limits

CHALLENGE 3: Solve N+1 Query Problem
- Given: Function that fetches users and their posts (N+1 queries)
- Fix: Reduce to 2 queries using batching
- Bonus: Add caching layer

CHALLENGE 4: Implement Autocomplete
- Use Trie data structure
- Support prefix search
- Return top K results by frequency

CHALLENGE 5: Detect Cycle in Graph
- Directed graph
- Return true if cycle exists
- O(V + E) time complexity

Solutions available in:
- ../01-advanced-algorithms/exercises.js
- ../03-web-performance/n-plus-1-solutions.js
`);

// ============================================
// FINAL RESULTS
// ============================================

quiz.results();

console.log(`
\n📚 Study Resources:
- Review wrong answers above
- Practice similar problems on LeetCode
- Study the solution files in this directory
- Build real projects using these patterns

💡 Next Steps:
1. Score < 60%: Review fundamentals, practice easier problems
2. Score 60-75%: Practice medium difficulty problems daily
3. Score 75-90%: Focus on system design and advanced topics
4. Score > 90%: Practice hard problems and mock interviews

🎯 Interview Prep Tips:
- Always explain your thought process
- Start with brute force, then optimize
- Discuss trade-offs (time vs space)
- Ask clarifying questions
- Write clean, tested code
- Consider edge cases
`);

module.exports = Quiz;
