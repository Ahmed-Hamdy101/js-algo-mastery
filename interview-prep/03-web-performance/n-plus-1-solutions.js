/**
 * N+1 QUERY PROBLEM - DETECTION AND SOLUTIONS
 * 
 * The N+1 query problem occurs when your application makes N additional queries
 * after an initial query, typically when fetching related data.
 * 
 * Example: Fetching 100 users, then making 100 separate queries for each user's posts
 * Result: 1 + 100 = 101 database queries instead of 2
 */

// ============================================
// PROBLEM DEMONSTRATION
// ============================================

/**
 * BAD: N+1 Query Problem
 * This makes 1 + N database queries
 */
class BadUserService {
  async getUsersWithPosts() {
    // Query 1: Get all users
    const users = await db.query('SELECT * FROM users');
    
    // Queries 2-N+1: Get posts for each user individually
    for (const user of users) {
      user.posts = await db.query('SELECT * FROM posts WHERE user_id = ?', [user.id]);
    }
    
    return users;
  }
}

// If you have 100 users, this makes 101 database queries!
// Time: Very slow, especially with network latency
// Database load: Extremely high

// ============================================
// SOLUTION 1: Eager Loading (Join)
// ============================================

/**
 * GOOD: Use JOIN to fetch all data in one query
 */
class GoodUserServiceJoin {
  async getUsersWithPosts() {
    const query = `
      SELECT 
        u.id as user_id,
        u.name as user_name,
        u.email,
        p.id as post_id,
        p.title as post_title,
        p.content as post_content
      FROM users u
      LEFT JOIN posts p ON u.id = p.user_id
      ORDER BY u.id, p.id
    `;
    
    const rows = await db.query(query);
    
    // Transform flat result into nested structure
    return this.groupResults(rows);
  }

  groupResults(rows) {
    const usersMap = new Map();
    
    for (const row of rows) {
      if (!usersMap.has(row.user_id)) {
        usersMap.set(row.user_id, {
          id: row.user_id,
          name: row.user_name,
          email: row.email,
          posts: []
        });
      }
      
      if (row.post_id) {
        usersMap.get(row.user_id).posts.push({
          id: row.post_id,
          title: row.post_title,
          content: row.post_content
        });
      }
    }
    
    return Array.from(usersMap.values());
  }
}

// Only 1 database query!
// Time: Much faster
// Database load: Minimal

// ============================================
// SOLUTION 2: DataLoader Pattern (Batching)
// ============================================

/**
 * GOOD: Batch requests using DataLoader pattern
 * This is especially useful with GraphQL
 */
class DataLoader {
  constructor(batchLoadFn) {
    this.batchLoadFn = batchLoadFn;
    this.cache = new Map();
    this.batch = [];
    this.batchScheduled = false;
  }

  load(key) {
    // Check cache first
    if (this.cache.has(key)) {
      return Promise.resolve(this.cache.get(key));
    }

    return new Promise((resolve, reject) => {
      this.batch.push({ key, resolve, reject });
      
      if (!this.batchScheduled) {
        this.batchScheduled = true;
        process.nextTick(() => this.executeBatch());
      }
    });
  }

  async executeBatch() {
    const currentBatch = this.batch;
    this.batch = [];
    this.batchScheduled = false;

    const keys = currentBatch.map(item => item.key);
    
    try {
      const values = await this.batchLoadFn(keys);
      
      currentBatch.forEach((item, index) => {
        const value = values[index];
        this.cache.set(item.key, value);
        item.resolve(value);
      });
    } catch (error) {
      currentBatch.forEach(item => item.reject(error));
    }
  }

  clear(key) {
    this.cache.delete(key);
  }

  clearAll() {
    this.cache.clear();
  }
}

// Usage with posts
const postLoader = new DataLoader(async (userIds) => {
  // Instead of N queries, make 1 query with all IDs
  const query = 'SELECT * FROM posts WHERE user_id IN (?)';
  const posts = await db.query(query, [userIds]);
  
  // Group posts by user_id
  const postsMap = new Map();
  userIds.forEach(id => postsMap.set(id, []));
  
  posts.forEach(post => {
    postsMap.get(post.user_id).push(post);
  });
  
  // Return in same order as userIds
  return userIds.map(id => postsMap.get(id));
});

class GoodUserServiceDataLoader {
  async getUsersWithPosts() {
    const users = await db.query('SELECT * FROM users');
    
    // These will be batched into a single query!
    await Promise.all(
      users.map(async user => {
        user.posts = await postLoader.load(user.id);
      })
    );
    
    return users;
  }
}

// Only 2 database queries (1 for users, 1 batched for all posts)
// Time: Fast
// Database load: Low

// ============================================
// SOLUTION 3: In-Memory Batching (Simple)
// ============================================

/**
 * GOOD: Simpler batching without external library
 */
class GoodUserServiceBatching {
  async getUsersWithPosts() {
    // Query 1: Get all users
    const users = await db.query('SELECT * FROM users');
    
    if (users.length === 0) return [];
    
    // Query 2: Get ALL posts for ALL users in one query
    const userIds = users.map(u => u.id);
    const posts = await db.query(
      'SELECT * FROM posts WHERE user_id IN (?)',
      [userIds]
    );
    
    // Group posts by user_id
    const postsMap = new Map();
    posts.forEach(post => {
      if (!postsMap.has(post.user_id)) {
        postsMap.set(post.user_id, []);
      }
      postsMap.get(post.user_id).push(post);
    });
    
    // Attach posts to users
    users.forEach(user => {
      user.posts = postsMap.get(user.id) || [];
    });
    
    return users;
  }
}

// Only 2 database queries!
// Time: Fast
// Database load: Low

// ============================================
// SOLUTION 4: Caching Strategy
// ============================================

/**
 * GOOD: Add caching layer to prevent repeated queries
 */
class CachedUserService {
  constructor() {
    this.cache = new Map();
    this.cacheTTL = 60000; // 1 minute
  }

  async getUsersWithPosts() {
    const cacheKey = 'users_with_posts';
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      console.log('Cache hit!');
      return cached.data;
    }

    console.log('Cache miss, fetching from DB...');
    const users = await this.fetchUsersWithPosts();
    
    this.cache.set(cacheKey, {
      data: users,
      timestamp: Date.now()
    });
    
    return users;
  }

  async fetchUsersWithPosts() {
    const users = await db.query('SELECT * FROM users');
    const userIds = users.map(u => u.id);
    const posts = await db.query(
      'SELECT * FROM posts WHERE user_id IN (?)',
      [userIds]
    );
    
    const postsMap = new Map();
    posts.forEach(post => {
      if (!postsMap.has(post.user_id)) {
        postsMap.set(post.user_id, []);
      }
      postsMap.get(post.user_id).push(post);
    });
    
    users.forEach(user => {
      user.posts = postsMap.get(user.id) || [];
    });
    
    return users;
  }

  invalidateCache(key) {
    this.cache.delete(key);
  }
}

// ============================================
// DETECTION: How to Find N+1 Problems
// ============================================

/**
 * Query Monitor - Detects N+1 patterns
 */
class QueryMonitor {
  constructor() {
    this.queries = [];
    this.threshold = 10; // Alert if more than 10 similar queries
  }

  logQuery(query, params) {
    this.queries.push({
      query,
      params,
      timestamp: Date.now(),
      stack: new Error().stack
    });
  }

  analyzeQueries() {
    const patterns = new Map();
    
    this.queries.forEach(q => {
      // Normalize query (remove specific IDs)
      const normalized = q.query.replace(/\d+/g, 'N');
      
      if (!patterns.has(normalized)) {
        patterns.set(normalized, []);
      }
      patterns.get(normalized).push(q);
    });

    // Find potential N+1 problems
    const problems = [];
    patterns.forEach((queries, pattern) => {
      if (queries.length > this.threshold) {
        problems.push({
          pattern,
          count: queries.length,
          queries: queries.slice(0, 5) // Sample
        });
      }
    });

    return problems;
  }

  report() {
    console.log('\n=== Query Analysis Report ===');
    console.log(`Total queries: ${this.queries.length}`);
    
    const problems = this.analyzeQueries();
    
    if (problems.length > 0) {
      console.log('\n⚠️  Potential N+1 Problems Detected:');
      problems.forEach(problem => {
        console.log(`\nPattern: ${problem.pattern}`);
        console.log(`Count: ${problem.count} queries`);
        console.log('Sample queries:', problem.queries.slice(0, 2));
      });
    } else {
      console.log('✅ No N+1 problems detected');
    }
  }

  reset() {
    this.queries = [];
  }
}

// ============================================
// PRACTICAL WEB DEV EXAMPLE
// ============================================

/**
 * Express.js Middleware for N+1 Detection
 */
function n1DetectionMiddleware() {
  return (req, res, next) => {
    req.queryMonitor = new QueryMonitor();
    
    // Wrap database query function
    const originalQuery = db.query;
    db.query = function(...args) {
      req.queryMonitor.logQuery(args[0], args[1]);
      return originalQuery.apply(this, args);
    };

    // Restore and report after response
    res.on('finish', () => {
      db.query = originalQuery;
      req.queryMonitor.report();
    });

    next();
  };
}

// Usage in Express:
// app.use(n1DetectionMiddleware());

// ============================================
// COMPARISON TABLE
// ============================================

/*
┌──────────────────┬──────────┬────────────┬──────────────┐
│ Approach         │ Queries  │ Complexity │ Use Case     │
├──────────────────┼──────────┼────────────┼──────────────┤
│ N+1 (Bad)        │ N+1      │ O(N²)      │ Never use    │
│ JOIN             │ 1        │ O(N)       │ Simple joins │
│ DataLoader       │ 2        │ O(N)       │ GraphQL      │
│ Simple Batching  │ 2        │ O(N)       │ REST APIs    │
│ Caching          │ 0-2      │ O(1)-O(N)  │ Static data  │
└──────────────────┴──────────┴────────────┴──────────────┘
*/

// ============================================
// EXERCISES
// ============================================

/**
 * EXERCISE 1: Fix this N+1 problem
 */
class Exercise1 {
  // BAD - Fix this!
  async getOrdersWithItems() {
    const orders = await db.query('SELECT * FROM orders');
    
    for (const order of orders) {
      order.items = await db.query(
        'SELECT * FROM order_items WHERE order_id = ?',
        [order.id]
      );
    }
    
    return orders;
  }

  // YOUR SOLUTION HERE:
  async getOrdersWithItemsFixed() {
    // Implement efficient version
  }
}

/**
 * EXERCISE 2: Implement a generic DataLoader
 */
class Exercise2 {
  // Implement a reusable DataLoader class
  // that can batch any type of query
}

/**
 * EXERCISE 3: Add caching with invalidation
 */
class Exercise3 {
  // Implement caching that automatically invalidates
  // when related data changes
}

// ============================================
// MOCK DATABASE FOR TESTING
// ============================================

const db = {
  _queryCount: 0,
  
  async query(sql, params) {
    this._queryCount++;
    console.log(`Query ${this._queryCount}: ${sql.substring(0, 50)}...`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 10));
    
    // Mock results
    if (sql.includes('SELECT * FROM users')) {
      return [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
      ];
    }
    
    if (sql.includes('SELECT * FROM posts WHERE user_id')) {
      const userId = params[0];
      return [
        { id: userId * 10, user_id: userId, title: 'Post 1', content: 'Content 1' },
        { id: userId * 10 + 1, user_id: userId, title: 'Post 2', content: 'Content 2' }
      ];
    }
    
    if (sql.includes('SELECT * FROM posts WHERE user_id IN')) {
      return [
        { id: 10, user_id: 1, title: 'Post 1', content: 'Content 1' },
        { id: 11, user_id: 1, title: 'Post 2', content: 'Content 2' },
        { id: 20, user_id: 2, title: 'Post 3', content: 'Content 3' }
      ];
    }
    
    return [];
  },
  
  resetCount() {
    this._queryCount = 0;
  }
};

// ============================================
// RUN DEMONSTRATIONS
// ============================================

async function runDemonstrations() {
  console.log('\n════════════════════════════════════════════');
  console.log('  N+1 QUERY PROBLEM - DEMONSTRATIONS');
  console.log('════════════════════════════════════════════\n');

  // Demo 1: Bad N+1
  console.log('\n--- BAD: N+1 Problem ---');
  db.resetCount();
  const bad = new BadUserService();
  await bad.getUsersWithPosts();
  console.log(`Total queries: ${db._queryCount} ❌\n`);

  // Demo 2: Good with batching
  console.log('\n--- GOOD: Batching Solution ---');
  db.resetCount();
  const good = new GoodUserServiceBatching();
  await good.getUsersWithPosts();
  console.log(`Total queries: ${db._queryCount} ✅\n`);

  // Demo 3: With caching
  console.log('\n--- GOOD: With Caching ---');
  db.resetCount();
  const cached = new CachedUserService();
  await cached.getUsersWithPosts(); // First call - cache miss
  await cached.getUsersWithPosts(); // Second call - cache hit
  console.log(`Total queries: ${db._queryCount} ✅✅\n`);
}

// Run if this file is executed directly
if (require.main === module) {
  runDemonstrations().catch(console.error);
}

module.exports = {
  GoodUserServiceJoin,
  GoodUserServiceBatching,
  DataLoader,
  QueryMonitor,
  CachedUserService,
  n1DetectionMiddleware
};
