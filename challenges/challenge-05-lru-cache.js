/**
 * 🔥 CHALLENGE 05: LRU Cache for API Responses
 * 
 * Difficulty: 🔴 HARD
 * Concepts: Map + Doubly LinkedList, Cache Algorithms
 * Based on: Chapter 5, 9
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * Build a Least Recently Used (LRU) cache for an API service.
 * When cache is full, evict the least recently used item.
 * Must achieve O(1) for both GET and PUT operations!
 * 
 * ============================================================================
 * REQUIREMENTS:
 * ============================================================================
 * 1. Fixed capacity (e.g., 100 items)
 * 2. O(1) lookup time
 * 3. O(1) insertion time
 * 4. O(1) eviction time
 * 5. Track access order (most recent → least recent)
 * 6. Update order on cache hit
 * 7. Evict least recently used when full
 * 
 * ============================================================================
 * WHY MAP + LINKEDLIST?
 * ============================================================================
 * - Map: O(1) lookup by key
 * - LinkedList: O(1) add/remove at ends
 * - Together: O(1) operations for LRU behavior!
 * 
 * ============================================================================
 * COMPLEXITY TARGETS:
 * ============================================================================
 * - get(key): O(1) - lookup AND update order
 * - put(key, value): O(1) - insert AND evict if needed
 * - delete(key): O(1)
 * 
 * ============================================================================
 * YOUR MISSION:
 * ============================================================================
 * Implement LRU Cache using Map + Doubly LinkedList. This is a REAL
 * interview question at Google, Facebook, Amazon!
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // key -> Node
        this.size = 0;
        
        // Dummy head and tail for easier manipulation
        this.head = new Node(0, 0); // Most recent
        this.tail = new Node(0, 0); // Least recent
        this.head.next = this.tail;
        this.tail.prev = this.head;
        
        this.hits = 0;
        this.misses = 0;
    }

    /**
     * Get value from cache
     * @param {string} key
     * @returns {any} value or null
     * 
     * TODO: 
     * 1. Check if key exists in Map
     * 2. If exists, move node to front (most recent)
     * 3. Return value
     * 4. Track hits/misses
     * 
     * CRITICAL: Must be O(1)!
     */
    get(key) {
        // YOUR CODE HERE
        
    }

    /**
     * Put key-value into cache
     * @param {string} key
     * @param {any} value
     * 
     * TODO:
     * 1. If key exists, update value and move to front
     * 2. If key doesn't exist:
     *    a. Create new node
     *    b. Add to front
     *    c. Add to Map
     *    d. If over capacity, evict LRU (tail node)
     * 
     * CRITICAL: Must be O(1)!
     */
    put(key, value) {
        // YOUR CODE HERE
        
    }

    /**
     * Delete key from cache
     * @param {string} key
     * @returns {boolean} success
     * 
     * TODO: Remove from both Map and LinkedList
     */
    delete(key) {
        // YOUR CODE HERE
        
    }

    /**
     * Move node to front (most recently used)
     * @param {Node} node
     * 
     * TODO: 
     * 1. Remove node from current position
     * 2. Add to front (after head)
     * 
     * This is CRITICAL for O(1) LRU behavior!
     */
    _moveToFront(node) {
        // YOUR CODE HERE
        
    }

    /**
     * Add node to front
     * @param {Node} node
     * 
     * TODO: Insert after head (most recent position)
     */
    _addToFront(node) {
        // YOUR CODE HERE
        
    }

    /**
     * Remove node from list
     * @param {Node} node
     * 
     * TODO: Update prev and next pointers
     */
    _removeNode(node) {
        // YOUR CODE HERE
        
    }

    /**
     * Evict least recently used (tail node)
     * @returns {Node} evicted node
     * 
     * TODO: Remove tail node, update Map
     */
    _evictLRU() {
        // YOUR CODE HERE
        
    }

    /**
     * Clear entire cache
     */
    clear() {
        // YOUR CODE HERE
        
    }

    /**
     * Get cache statistics
     * @returns {Object}
     */
    getStats() {
        return {
            size: this.size,
            capacity: this.capacity,
            hitRate: this.hits / (this.hits + this.misses) || 0,
            hits: this.hits,
            misses: this.misses
        };
    }

    /**
     * Get all keys in order (most recent first)
     * @returns {Array}
     */
    getKeys() {
        const keys = [];
        let current = this.head.next;
        while (current !== this.tail) {
            keys.push(current.key);
            current = current.next;
        }
        return keys;
    }

    /**
     * Check if key exists
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
        return this.cache.has(key);
    }
}

// ============================================================================
// TEST CASES - DO NOT MODIFY
// ============================================================================

console.log("🧪 TEST SUITE: LRU Cache");
console.log("================================\n");

const cache = new LRUCache(3); // Capacity of 3

// Test 1: Basic Put and Get
console.log("✅ Test 1: Basic Operations");
cache.put("user1", { name: "Alice", age: 25 });
cache.put("user2", { name: "Bob", age: 30 });
cache.put("user3", { name: "Charlie", age: 35 });
console.log(`Cache size: ${cache.size}`);
const user1 = cache.get("user1");
console.log(`Retrieved: ${user1 ? user1.name : "null"}`);
console.log("Expected: size 3, retrieved Alice\n");

// Test 2: Eviction on Overflow
console.log("✅ Test 2: LRU Eviction");
console.log("Adding user4 (should evict user2 - least recent)");
cache.put("user4", { name: "Diana", age: 28 });
const user2Gone = cache.get("user2");
const user4Present = cache.get("user4");
console.log(`user2 exists: ${user2Gone !== null}`);
console.log(`user4 exists: ${user4Present !== null}`);
console.log("Expected: user2=false, user4=true\n");

// Test 3: Access Updates Order
console.log("✅ Test 3: Access Updates Order");
cache.get("user1"); // Access user1
cache.put("user5", { name: "Eve", age: 32 }); // Should evict user3
const user3Gone = cache.get("user3");
const user1Still = cache.get("user1");
console.log(`user3 exists: ${user3Gone !== null}`);
console.log(`user1 exists: ${user1Still !== null}`);
console.log("Expected: user3=false, user1=true (user1 was accessed recently)\n");

// Test 4: Update Existing Key
console.log("✅ Test 4: Update Existing Key");
cache.put("user1", { name: "Alice Updated", age: 26 });
const updated = cache.get("user1");
console.log(`Updated name: ${updated.name}`);
console.log(`Cache size: ${cache.size}`);
console.log("Expected: Alice Updated, size unchanged (3)\n");

// Test 5: Delete
console.log("✅ Test 5: Delete Key");
cache.delete("user4");
const deletedUser = cache.get("user4");
console.log(`user4 after delete: ${deletedUser || "null"}`);
console.log(`Cache size: ${cache.size}`);
console.log("Expected: null, size 2\n");

// Test 6: Hit Rate
console.log("✅ Test 6: Cache Statistics");
const stats = cache.getStats();
console.log(`Hit rate: ${(stats.hitRate * 100).toFixed(1)}%`);
console.log(`Hits: ${stats.hits}, Misses: ${stats.misses}`);
console.log("");

// ============================================================================
// PERFORMANCE TEST
// ============================================================================

console.log("⚡ PERFORMANCE TEST: 10,000 Operations");
console.log("================================\n");

const perfCache = new LRUCache(100);

console.time("10k mixed operations");

// Simulate realistic API cache usage
for (let i = 0; i < 10000; i++) {
    const key = `api_call_${i % 150}`; // 150 unique keys, 100 capacity
    
    if (i % 3 === 0) {
        // 33% reads
        perfCache.get(key);
    } else {
        // 67% writes
        perfCache.put(key, { data: `response_${i}`, timestamp: Date.now() });
    }
}

console.timeEnd("10k mixed operations");

const perfStats = perfCache.getStats();
console.log(`\nFinal stats:`);
console.log(`  Hit rate: ${(perfStats.hitRate * 100).toFixed(1)}%`);
console.log(`  Cache size: ${perfStats.size}/${perfStats.capacity}`);
console.log(`  Total hits: ${perfStats.hits}`);
console.log(`  Total misses: ${perfStats.misses}`);
console.log("\nExpected: Operations complete in <100ms");

// ============================================================================
// SCENARIO TEST: API Response Caching
// ============================================================================

console.log("\n📖 SCENARIO TEST: API Cache");
console.log("================================\n");

const apiCache = new LRUCache(5);

// Simulate API calls
const apiCall = (endpoint, params) => {
    const cacheKey = `${endpoint}:${JSON.stringify(params)}`;
    
    // Check cache first
    let response = apiCache.get(cacheKey);
    
    if (response) {
        console.log(`✅ Cache HIT: ${endpoint}`);
        return response;
    }
    
    console.log(`❌ Cache MISS: ${endpoint} - Fetching...`);
    
    // Simulate API call delay
    response = { 
        endpoint, 
        params, 
        data: `Data for ${endpoint}`,
        timestamp: Date.now() 
    };
    
    // Cache response
    apiCache.put(cacheKey, response);
    return response;
};

// Simulate user actions
console.log("User browses products...");
apiCall("/api/products", { page: 1 });
apiCall("/api/products", { page: 2 });
apiCall("/api/products", { page: 3 });

console.log("\nUser re-views page 1 (should hit cache)...");
apiCall("/api/products", { page: 1 });

console.log("\nUser browses more pages (evicts old cache)...");
apiCall("/api/products", { page: 4 });
apiCall("/api/products", { page: 5 });
apiCall("/api/products", { page: 6 });

console.log("\nUser returns to page 2 (evicted - miss)...");
apiCall("/api/products", { page: 2 });

const finalStats = apiCache.getStats();
console.log(`\n📊 Cache Performance:`);
console.log(`  Hit rate: ${(finalStats.hitRate * 100).toFixed(1)}%`);

// ============================================================================
// QUESTIONS TO ANSWER (Write in comments):
// ============================================================================
/*
 * Q1: Why do we need BOTH Map and LinkedList for O(1) LRU?
 * A1: 
 * 
 * Q2: What's the tradeoff between cache size and hit rate?
 * A2: 
 * 
 * Q3: How would you handle cache invalidation (expired data)?
 * A3: 
 * 
 * Q4: Why use doubly linked list instead of singly linked?
 * A4: 
 * 
 * Q5: How would you implement TTL (time to live) for cache entries?
 * A5: 
 */

// ============================================================================
// HINTS (Only look if stuck for 30+ minutes!)
// ============================================================================
/*
 * HINT 1: Map stores key -> Node for O(1) lookup
 * HINT 2: LinkedList maintains access order (head=recent, tail=old)
 * HINT 3: On access, move node to head (removeNode + addToFront)
 * HINT 4: On evict, remove tail.prev (the LRU item)
 * HINT 5: Dummy head/tail simplify edge cases (empty list)
 */

// ============================================================================
// BONUS CHALLENGES:
// ============================================================================
/*
 * 🎯 BONUS 1: Add TTL (time-to-live) for automatic expiration
 * 🎯 BONUS 2: Implement LFU (Least Frequently Used) cache
 * 🎯 BONUS 3: Add cache warming (pre-populate with common data)
 * 🎯 BONUS 4: Implement distributed cache (multiple instances)
 * 🎯 BONUS 5: Add cache size limits by memory (not just count)
 * 🎯 BONUS 6: Implement cache compression for large objects
 */
