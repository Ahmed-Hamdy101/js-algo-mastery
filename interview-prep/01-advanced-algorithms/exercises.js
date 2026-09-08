/**
 * SENIOR LEVEL INTERVIEW EXERCISES - ADVANCED ALGORITHMS
 * 
 * These are common senior-level interview questions.
 * Try to solve each before looking at the solution.
 */

// ============================================
// EXERCISE 1: LRU Cache Implementation
// ============================================
/**
 * Problem: Implement an LRU (Least Recently Used) Cache
 * 
 * Requirements:
 * - get(key): Get value (returns -1 if not exists), O(1)
 * - put(key, value): Set or insert value, O(1)
 * - When cache is full, remove least recently used item
 * 
 * Example:
 * cache = new LRUCache(2);
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * 
 * Web Dev Use Case: Session storage, API response caching, browser cache simulation
 */

// YOUR SOLUTION HERE:
class LRUCache {
  constructor(capacity) {
    // Implement here
  }

  get(key) {
    // Implement here
  }

  put(key, value) {
    // Implement here
  }
}

// ============================================
// SOLUTION: LRU Cache
// ============================================
class LRUCacheSolution {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Map maintains insertion order
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    
    // Move to end (most recently used)
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    // If exists, remove it first (we'll re-add at end)
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    // If at capacity, remove least recently used (first item)
    if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    // Add new item (most recently used)
    this.cache.set(key, value);
  }
}

// Time Complexity: O(1) for both operations
// Space Complexity: O(capacity)

// ============================================
// EXERCISE 2: Design a Rate Limiter
// ============================================
/**
 * Problem: Implement a sliding window rate limiter
 * 
 * Requirements:
 * - Allow N requests per time window
 * - isAllowed(userId): Returns true if request is allowed
 * - Use sliding window (not fixed window)
 * 
 * Web Dev Use Case: API rate limiting, login attempt limiting, DDoS prevention
 */

// YOUR SOLUTION HERE:
class RateLimiter {
  constructor(maxRequests, windowMs) {
    // Implement here
  }

  isAllowed(userId) {
    // Implement here
  }
}

// ============================================
// SOLUTION: Rate Limiter (Sliding Window)
// ============================================
class RateLimiterSolution {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map(); // userId -> array of timestamps
  }

  isAllowed(userId) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get user's request history
    if (!this.requests.has(userId)) {
      this.requests.set(userId, []);
    }
    
    const userRequests = this.requests.get(userId);
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(timestamp => timestamp > windowStart);
    
    // Check if under limit
    if (validRequests.length < this.maxRequests) {
      validRequests.push(now);
      this.requests.set(userId, validRequests);
      return true;
    }
    
    // Update the array even if rejected
    this.requests.set(userId, validRequests);
    return false;
  }

  // Cleanup method to prevent memory leaks
  cleanup() {
    const now = Date.now();
    for (const [userId, timestamps] of this.requests.entries()) {
      const validTimestamps = timestamps.filter(t => t > now - this.windowMs);
      if (validTimestamps.length === 0) {
        this.requests.delete(userId);
      } else {
        this.requests.set(userId, validTimestamps);
      }
    }
  }
}

// Time Complexity: O(N) where N is requests in window per user
// Space Complexity: O(U * N) where U is users, N is requests per user

// ============================================
// EXERCISE 3: Design a Trie (Prefix Tree)
// ============================================
/**
 * Problem: Implement a Trie for autocomplete
 * 
 * Requirements:
 * - insert(word): Insert a word
 * - search(word): Returns true if word exists
 * - startsWith(prefix): Returns true if there's a word with given prefix
 * - autocomplete(prefix): Returns all words with given prefix
 * 
 * Web Dev Use Case: Search autocomplete, spell checker, IP routing
 */

// YOUR SOLUTION HERE:
class TrieNode {
  constructor() {
    // Implement here
  }
}

class Trie {
  constructor() {
    // Implement here
  }

  insert(word) {
    // Implement here
  }

  search(word) {
    // Implement here
  }

  startsWith(prefix) {
    // Implement here
  }

  autocomplete(prefix) {
    // Implement here
  }
}

// ============================================
// SOLUTION: Trie (Prefix Tree)
// ============================================
class TrieNodeSolution {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class TrieSolution {
  constructor() {
    this.root = new TrieNodeSolution();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNodeSolution());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  autocomplete(prefix) {
    let node = this.root;
    
    // Navigate to prefix
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char);
    }
    
    // Collect all words with this prefix
    const results = [];
    this._collectWords(node, prefix, results);
    return results;
  }

  _collectWords(node, currentWord, results) {
    if (node.isEndOfWord) {
      results.push(currentWord);
    }
    
    for (const [char, childNode] of node.children) {
      this._collectWords(childNode, currentWord + char, results);
    }
  }
}

// Time Complexity: 
// - insert/search/startsWith: O(m) where m is word length
// - autocomplete: O(m + n) where m is prefix length, n is total characters in results
// Space Complexity: O(ALPHABET_SIZE * N * M) where N is number of words, M is average length

// ============================================
// TESTS
// ============================================

console.log('\n=== Testing LRU Cache ===');
const lruCache = new LRUCacheSolution(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log('Get 1:', lruCache.get(1)); // 1
lruCache.put(3, 3); // Evicts key 2
console.log('Get 2:', lruCache.get(2)); // -1
lruCache.put(4, 4); // Evicts key 1
console.log('Get 1:', lruCache.get(1)); // -1
console.log('Get 3:', lruCache.get(3)); // 3
console.log('Get 4:', lruCache.get(4)); // 4

console.log('\n=== Testing Rate Limiter ===');
const limiter = new RateLimiterSolution(3, 1000); // 3 requests per second
console.log('Request 1:', limiter.isAllowed('user1')); // true
console.log('Request 2:', limiter.isAllowed('user1')); // true
console.log('Request 3:', limiter.isAllowed('user1')); // true
console.log('Request 4:', limiter.isAllowed('user1')); // false
setTimeout(() => {
  console.log('Request after 1s:', limiter.isAllowed('user1')); // true
}, 1100);

console.log('\n=== Testing Trie ===');
const trie = new TrieSolution();
trie.insert('apple');
trie.insert('app');
trie.insert('application');
trie.insert('apply');
console.log('Search "apple":', trie.search('apple')); // true
console.log('Search "app":', trie.search('app')); // true
console.log('Search "appl":', trie.search('appl')); // false
console.log('Starts with "app":', trie.startsWith('app')); // true
console.log('Autocomplete "app":', trie.autocomplete('app')); // ['app', 'apple', 'application', 'apply']

module.exports = {
  LRUCacheSolution,
  RateLimiterSolution,
  TrieSolution
};
