/**
 * SYSTEM DESIGN PROBLEMS - SENIOR LEVEL
 * 
 * These are common system design questions asked in senior interviews.
 * Each problem includes:
 * - Problem statement
 * - Requirements to clarify
 * - Key considerations
 * - Hints and tips (NO SOLUTIONS - you must design yourself!)
 * - How to approach the problem
 */

// ============================================
// PROBLEM 1: URL SHORTENER (like bit.ly)
// ============================================

/**
 * PROBLEM: Design a URL shortening service
 * 
 * REQUIREMENTS TO CLARIFY WITH INTERVIEWER:
 * 1. Scale: How many URLs per day? (e.g., 100M per day)
 * 2. Read/Write ratio: More reads or writes? (usually 100:1 read:write)
 * 3. URL length: How long should short URLs be? (e.g., 7 characters)
 * 4. Expiration: Should URLs expire? After how long?
 * 5. Custom URLs: Can users choose custom short URLs?
 * 6. Analytics: Need to track clicks, locations, etc?
 * 
 * FUNCTIONAL REQUIREMENTS:
 * - Given a long URL, return a short URL
 * - Given a short URL, redirect to original URL
 * - Optional: Custom short URLs
 * - Optional: Analytics/statistics
 * 
 * NON-FUNCTIONAL REQUIREMENTS:
 * - High availability (service should always be up)
 * - Low latency (fast redirects)
 * - Scalable (handle millions of requests)
 * - Durable (don't lose URLs)
 * 
 * KEY CONSIDERATIONS:
 * 
 * 1. URL Generation:
 *    Hint: How to generate unique short codes?
 *    Options to consider:
 *    - Random generation + collision check
 *    - Counter-based (use auto-increment ID)
 *    - Hash-based (MD5/SHA but truncated)
 *    Think about: Pros/cons of each approach
 * 
 * 2. Database Choice:
 *    Hint: SQL or NoSQL?
 *    Consider:
 *    - What's your data model? (simple key-value?)
 *    - Do you need ACID transactions?
 *    - What's your query pattern?
 *    - Read-heavy or write-heavy?
 * 
 * 3. Caching Strategy:
 *    Hint: Which URLs should be cached?
 *    Consider:
 *    - Cache hot URLs (popular ones)
 *    - What's your cache eviction policy? (LRU?)
 *    - Where to place cache? (CDN, app level, DB level?)
 * 
 * 4. Scalability:
 *    Hint: How to handle 100M requests/day?
 *    Consider:
 *    - Horizontal scaling (multiple servers)
 *    - Load balancing
 *    - Database sharding/partitioning
 *    - Read replicas
 * 
 * 5. Analytics:
 *    Hint: How to track without slowing down redirects?
 *    Consider:
 *    - Asynchronous logging
 *    - Write to message queue (Kafka, RabbitMQ)
 *    - Batch processing
 * 
 * SYSTEM COMPONENTS TO DESIGN:
 * - API Layer (REST endpoints)
 * - Application Servers
 * - Database (primary storage)
 * - Cache Layer (Redis/Memcached)
 * - Load Balancer
 * - Analytics Pipeline (optional)
 * 
 * API DESIGN:
 * POST /api/shorten
 * Body: { "longUrl": "https://example.com/very/long/url" }
 * Response: { "shortUrl": "https://short.url/abc1234" }
 * 
 * GET /{shortCode}
 * Response: 302 Redirect to original URL
 * 
 * CALCULATIONS TO DO:
 * - Storage: 100M URLs/day × 365 days × 5 years × 500 bytes = ?
 * - QPS: 100M writes/day = ? writes/second
 * - Read QPS: 100M × 100 (read:write ratio) = ?
 * - Bandwidth: Calculate based on average URL size
 * 
 * TIPS:
 * 1. Start with high-level architecture diagram
 * 2. Discuss trade-offs (consistency vs availability)
 * 3. Consider failure scenarios (DB down, cache miss)
 * 4. Think about monitoring and alerting
 * 5. Mention security (rate limiting, spam prevention)
 */

// YOUR DESIGN HERE:
// Draw architecture diagram, explain components, discuss trade-offs


// ============================================
// PROBLEM 2: RATE LIMITER
// ============================================

/**
 * PROBLEM: Design a rate limiting system
 * 
 * REQUIREMENTS TO CLARIFY:
 * 1. Limit type: Per user? Per IP? Per API key?
 * 2. Rate: How many requests per time window? (e.g., 100/minute)
 * 3. Distributed: Single server or distributed system?
 * 4. Response: What happens when limit exceeded? (429 error?)
 * 5. Granularity: Different limits for different endpoints?
 * 
 * FUNCTIONAL REQUIREMENTS:
 * - Allow N requests per time window per user
 * - Reject requests exceeding limit
 * - Support different rules for different endpoints
 * - Support different user tiers (free vs paid)
 * 
 * KEY CONSIDERATIONS:
 * 
 * 1. Algorithm Choice:
 *    Options:
 *    a) Fixed Window Counter
 *       Pros: Simple, low memory
 *       Cons: Burst at window boundaries
 *    
 *    b) Sliding Window Log
 *       Pros: Accurate, no burst issues
 *       Cons: High memory (store all timestamps)
 *    
 *    c) Sliding Window Counter
 *       Pros: Balance of accuracy and memory
 *       Cons: Slightly complex
 *    
 *    d) Token Bucket
 *       Pros: Allows bursts, smooth rate
 *       Cons: More complex state
 *    
 *    e) Leaky Bucket
 *       Pros: Smooth output rate
 *       Cons: May reject valid requests during bursts
 *    
 *    Hint: Which algorithm best fits your requirements?
 * 
 * 2. Storage:
 *    Hint: Where to store rate limit data?
 *    Consider:
 *    - In-memory (fast but lost on restart)
 *    - Redis (fast + persistent)
 *    - Database (persistent but slower)
 *    Think: Trade-off between speed and durability
 * 
 * 3. Distributed System:
 *    Hint: How to rate limit across multiple servers?
 *    Consider:
 *    - Centralized counter (Redis)
 *    - Race conditions (use Redis atomic operations)
 *    - What if Redis is down? (fail open or closed?)
 * 
 * 4. Performance:
 *    Hint: Rate limiter should be fast (< 1ms overhead)
 *    Consider:
 *    - Local cache + sync to Redis
 *    - Batch updates
 *    - Eventual consistency acceptable?
 * 
 * 5. Rules Engine:
 *    Hint: Different limits for different users/endpoints
 *    Consider:
 *    - Where to store rules? (config file, database)
 *    - How to update rules without restart?
 *    - Hierarchy of rules (global, per-user, per-endpoint)
 * 
 * SYSTEM COMPONENTS:
 * - Rate Limiter Middleware
 * - Rules Engine
 * - Storage Layer (Redis)
 * - Monitoring/Alerting
 * 
 * ALGORITHM COMPARISON:
 * 
 * Fixed Window:
 * - Time window: 0-60s, 60-120s, etc.
 * - Problem: User can make 100 requests at 0:59 and 100 at 1:00
 * - Result: 200 requests in 1 second!
 * 
 * Sliding Window:
 * - Time window slides with each request
 * - Check: Count requests in last 60 seconds
 * - More accurate but requires storing timestamps
 * 
 * Token Bucket:
 * - Bucket holds tokens (e.g., 100 tokens)
 * - Each request consumes 1 token
 * - Bucket refills at constant rate
 * - Allows bursts up to bucket size
 * 
 * TIPS:
 * 1. Discuss trade-offs between algorithms
 * 2. Consider edge cases (clock skew, time zones)
 * 3. Plan for Redis failure (circuit breaker)
 * 4. Mention rate limit headers (X-RateLimit-Remaining)
 * 5. Consider DDoS protection
 */

// YOUR DESIGN HERE:
// Choose algorithm, design data structures, explain trade-offs


// ============================================
// PROBLEM 3: DESIGN INSTAGRAM/TWITTER FEED
// ============================================

/**
 * PROBLEM: Design a social media news feed
 * 
 * REQUIREMENTS TO CLARIFY:
 * 1. Feed type: Chronological or algorithmic?
 * 2. Scale: How many users? Posts per day?
 * 3. Follow graph: Can users follow many people? (1000s?)
 * 4. Real-time: Should feed update in real-time?
 * 5. Content: Text only or images/videos too?
 * 
 * FUNCTIONAL REQUIREMENTS:
 * - User can post updates
 * - User can follow/unfollow others
 * - User sees feed of posts from people they follow
 * - Feed should be fast to load
 * - Support pagination
 * 
 * KEY CONSIDERATIONS:
 * 
 * 1. Feed Generation Strategy:
 *    
 *    Option A: Pull Model (Fan-out on Read)
 *    - Generate feed when user requests it
 *    - Query posts from all followed users
 *    - Sort and return
 *    Pros: ?
 *    Cons: ?
 *    
 *    Option B: Push Model (Fan-out on Write)
 *    - When user posts, push to all followers' feeds
 *    - Pre-compute and cache feeds
 *    - Fast reads
 *    Pros: ?
 *    Cons: ?
 *    
 *    Option C: Hybrid
 *    - Push for users with few followers
 *    - Pull for celebrities with millions of followers
 *    Pros: ?
 *    Cons: ?
 *    
 *    Hint: Which is best for your scale?
 * 
 * 2. Database Schema:
 *    Hint: How to model users, posts, follows?
 *    Consider:
 *    - Users table
 *    - Posts table (user_id, content, timestamp)
 *    - Follows table (follower_id, followee_id)
 *    - Feed table (user_id, post_id, timestamp) - for push model
 *    Think: SQL or NoSQL? Why?
 * 
 * 3. Ranking Algorithm:
 *    Hint: How to order posts in feed?
 *    Consider:
 *    - Chronological (simple)
 *    - Engagement-based (likes, comments)
 *    - Machine learning model
 *    - Time decay (older posts rank lower)
 * 
 * 4. Caching:
 *    Hint: What to cache?
 *    Consider:
 *    - User's feed (most recent N posts)
 *    - Hot posts (trending)
 *    - User profiles
 *    Think: Cache invalidation strategy?
 * 
 * 5. Media Handling:
 *    Hint: How to handle images/videos?
 *    Consider:
 *    - Store in CDN
 *    - Generate thumbnails
 *    - Lazy loading
 *    - Compression
 * 
 * SYSTEM COMPONENTS:
 * - API Servers
 * - Database (users, posts, follows)
 * - Feed Generation Service
 * - Cache Layer (Redis)
 * - Message Queue (for async processing)
 * - CDN (for media)
 * - Load Balancers
 * 
 * API DESIGN:
 * POST /api/posts
 * GET /api/feed?user_id=123&page=1&limit=20
 * POST /api/follow
 * POST /api/like
 * 
 * CALCULATIONS:
 * - 100M daily active users
 * - Each user follows 200 people
 * - Each user posts 2 times per day
 * - Feed shows 20 posts per page
 * 
 * Storage per user:
 * - If using push model: 200 follows × 2 posts/day = 400 posts/day to store
 * - If using pull model: Query 200 users on demand
 * 
 * TIPS:
 * 1. Start with high-level components
 * 2. Discuss celebrity problem (millions of followers)
 * 3. Consider consistency (eventual vs strong)
 * 4. Plan for failures (service down, cache miss)
 * 5. Mention monitoring (feed latency, errors)
 */

// YOUR DESIGN HERE:
// Design feed generation, schema, explain trade-offs


// ============================================
// PROBLEM 4: DESIGN NOTIFICATION SYSTEM
// ============================================

/**
 * PROBLEM: Design a notification system (like Facebook/Twitter notifications)
 * 
 * REQUIREMENTS TO CLARIFY:
 * 1. Notification types: Push, SMS, Email, In-app?
 * 2. Scale: How many notifications per day?
 * 3. Priority: Different priorities? Urgent vs normal?
 * 4. Delivery: Guarantee delivery or best-effort?
 * 5. Preferences: Users can opt-out of certain types?
 * 
 * FUNCTIONAL REQUIREMENTS:
 * - Send notifications through multiple channels
 * - User preferences (which notifications to receive)
 * - Notification history
 * - Mark as read/unread
 * - Delivery confirmation
 * 
 * KEY CONSIDERATIONS:
 * 
 * 1. Architecture Pattern:
 *    Hint: How to handle multiple notification types?
 *    Consider:
 *    - Event-driven architecture
 *    - Message queue (Kafka, RabbitMQ)
 *    - Worker pools for each channel
 *    - Retry mechanism for failures
 * 
 * 2. Notification Flow:
 *    Hint: Steps from trigger to delivery
 *    Consider:
 *    1. Event occurs (new like, comment, etc.)
 *    2. Notification service receives event
 *    3. Check user preferences
 *    4. Determine channels (push, email, SMS)
 *    5. Format notification for each channel
 *    6. Send through appropriate gateway
 *    7. Track delivery status
 *    8. Store in database for history
 * 
 * 3. Rate Limiting:
 *    Hint: Don't spam users
 *    Consider:
 *    - Max notifications per hour
 *    - Batching (combine similar notifications)
 *    - Quiet hours (no notifications at night)
 *    - Priority-based (urgent bypass limits)
 * 
 * 4. Scalability:
 *    Hint: How to handle millions of notifications?
 *    Consider:
 *    - Message queue for buffering
 *    - Worker pools (can scale independently)
 *    - Partitioning by user_id
 *    - Priority queues
 * 
 * 5. Reliability:
 *    Hint: What if SMS gateway is down?
 *    Consider:
 *    - Retry with exponential backoff
 *    - Dead letter queue for failed notifications
 *    - Circuit breaker pattern
 *    - Fallback channels (if push fails, try SMS)
 * 
 * 6. User Preferences:
 *    Hint: Where to store and check?
 *    Consider:
 *    - Database schema for preferences
 *    - Cache preferences (Redis)
 *    - Default preferences
 *    - Granular control (per-type, per-channel)
 * 
 * SYSTEM COMPONENTS:
 * - Notification Service (orchestrator)
 * - Message Queue (Kafka/RabbitMQ)
 * - Channel Workers (Push, SMS, Email)
 * - Third-party Gateways (Twilio, SendGrid, FCM)
 * - Database (notification history, preferences)
 * - Cache (user preferences)
 * 
 * DATABASE SCHEMA:
 * notifications:
 *   - id, user_id, type, title, body, status, created_at
 * 
 * preferences:
 *   - user_id, notification_type, channel, enabled
 * 
 * delivery_status:
 *   - notification_id, channel, status, attempts, delivered_at
 * 
 * TIPS:
 * 1. Discuss idempotency (don't send twice)
 * 2. Consider template system for notifications
 * 3. Plan for A/B testing different messages
 * 4. Mention analytics (delivery rate, open rate)
 * 5. Think about privacy and data retention
 */

// YOUR DESIGN HERE:
// Design notification flow, components, explain reliability


// ============================================
// PROBLEM 5: DESIGN WEB CRAWLER
// ============================================

/**
 * PROBLEM: Design a web crawler (like Googlebot)
 * 
 * REQUIREMENTS TO CLARIFY:
 * 1. Scale: How many pages? (billions?)
 * 2. Freshness: How often to re-crawl? (daily, weekly?)
 * 3. Politeness: Respect robots.txt? Rate limits per domain?
 * 4. Content: HTML only or images/videos too?
 * 5. Priority: Crawl important pages first?
 * 
 * FUNCTIONAL REQUIREMENTS:
 * - Start with seed URLs
 * - Download web pages
 * - Extract links and add to queue
 * - Store content
 * - Handle duplicates
 * - Respect robots.txt
 * 
 * KEY CONSIDERATIONS:
 * 
 * 1. URL Frontier (Queue):
 *    Hint: How to manage billions of URLs?
 *    Consider:
 *    - Priority queue (important pages first)
 *    - Multiple queues (one per domain)
 *    - Politeness (delay between requests to same domain)
 *    - Deduplication (don't crawl same URL twice)
 * 
 * 2. Duplicate Detection:
 *    Hint: Same URL or same content?
 *    Consider:
 *    - URL deduplication (hash URLs)
 *    - Content deduplication (hash content, check similarity)
 *    - Bloom filter (space-efficient)
 *    - Checksum/fingerprint
 * 
 * 3. Distributed Crawling:
 *    Hint: How to coordinate multiple crawlers?
 *    Consider:
 *    - Partition URLs by domain
 *    - Centralized queue vs distributed queue
 *    - Consistent hashing
 *    - Handle crawler failures
 * 
 * 4. Politeness:
 *    Hint: Don't overload websites
 *    Consider:
 *    - robots.txt parser
 *    - Rate limiting per domain (e.g., 1 req/second)
 *    - User-agent string
 *    - Backoff on errors
 * 
 * 5. Storage:
 *    Hint: Where to store crawled pages?
 *    Consider:
 *    - Distributed file system (HDFS, S3)
 *    - Database for metadata
 *    - Compression
 *    - Data retention policy
 * 
 * 6. Failure Handling:
 *    Hint: What if crawler crashes?
 *    Consider:
 *    - Checkpoint progress
 *    - Retry failed URLs
 *    - Handle timeouts
 *    - DNS failures, network errors
 * 
 * SYSTEM COMPONENTS:
 * - URL Frontier (priority queue)
 * - Downloader (fetch pages)
 * - DNS Resolver (cache DNS lookups)
 * - Content Parser (extract links)
 * - Duplicate Detector
 * - Storage System
 * - Scheduler
 * 
 * CRAWLER FLOW:
 * 1. Pick URL from frontier
 * 2. Check if already crawled (duplicate detection)
 * 3. Check robots.txt
 * 4. Download page
 * 5. Parse content
 * 6. Extract links
 * 7. Add new links to frontier
 * 8. Store page content
 * 9. Update metadata
 * 
 * CALCULATIONS:
 * - 1 billion pages to crawl
 * - Average page size: 100KB
 * - Total storage: 100TB
 * - Crawl time: 1 month
 * - QPS: 1B / (30 days × 24h × 3600s) = ?
 * 
 * TIPS:
 * 1. Discuss BFS vs DFS crawling strategy
 * 2. Consider priority (PageRank-like)
 * 3. Plan for dynamic content (JavaScript)
 * 4. Mention anti-crawling measures (CAPTCHA, rate limits)
 * 5. Think about legal/ethical considerations
 */

// YOUR DESIGN HERE:
// Design crawler architecture, URL frontier, explain deduplication


// ============================================
// PROBLEM 6: DESIGN AUTOCOMPLETE/TYPEAHEAD
// ============================================

/**
 * PROBLEM: Design autocomplete/search suggestions (like Google search)
 * 
 * REQUIREMENTS TO CLARIFY:
 * 1. Trigger: After how many characters? (2? 3?)
 * 2. Suggestions: How many to show? (5? 10?)
 * 3. Ranking: By popularity? Personalization?
 * 4. Update: How often to update suggestions?
 * 5. Language: Single language or multilingual?
 * 
 * FUNCTIONAL REQUIREMENTS:
 * - Return suggestions as user types
 * - Fast response (< 100ms)
 * - Relevant suggestions (popular + personalized)
 * - Support typos/fuzzy matching
 * - Real-time updates (trending searches)
 * 
 * KEY CONSIDERATIONS:
 * 
 * 1. Data Structure:
 *    Hint: Trie is obvious choice, but optimize it
 *    Consider:
 *    - Trie (prefix tree)
 *    - Store frequency/popularity at each node
 *    - Cache top K suggestions at each node
 *    - Memory optimization (merge similar branches)
 * 
 * 2. Ranking:
 *    Hint: How to order suggestions?
 *    Consider:
 *    - Frequency-based (most searched)
 *    - Recency (trending searches)
 *    - Personalization (user history)
 *    - Location-based
 *    - Time-based (morning vs evening)
 * 
 * 3. Scalability:
 *    Hint: Trie in memory across servers
 *    Consider:
 *    - Partition by prefix (a-m on server1, n-z on server2)
 *    - Replicate entire trie on each server
 *    - Cache at multiple levels (browser, CDN, server)
 *    - Read replicas
 * 
 * 4. Updates:
 *    Hint: How to keep suggestions fresh?
 *    Consider:
 *    - Batch updates (every hour, daily)
 *    - Incremental updates
 *    - Separate write pipeline
 *    - Analytics pipeline (aggregate searches)
 * 
 * 5. Fuzzy Matching:
 *    Hint: Handle typos
 *    Consider:
 *    - Edit distance (Levenshtein)
 *    - Phonetic matching (Soundex)
 *    - Common typo patterns
 *    - Did you mean suggestions
 * 
 * SYSTEM COMPONENTS:
 * - Autocomplete Service
 * - Trie Store (in-memory)
 * - Analytics Pipeline (collect searches)
 * - Aggregator (compute popularity)
 * - Cache Layer (Redis)
 * - CDN (for static resources)
 * 
 * API DESIGN:
 * GET /api/suggest?q=face&limit=5
 * Response: ["facebook", "face mask", "facetime", "face filters", "face recognition"]
 * 
 * TRIE OPTIMIZATION:
 * - Each node stores:
 *   - Character
 *   - Children map
 *   - Is end of word
 *   - Frequency/popularity
 *   - Top K completions (cached)
 * 
 * - Query optimization:
 *   - Instead of traversing to leaf nodes each time
 *   - Cache top K suggestions at each node
 *   - O(1) lookup after reaching prefix node
 * 
 * CALCULATIONS:
 * - 100M searches per day
 * - 20% unique queries
 * - Average query length: 30 characters
 * - Trie storage: ?
 * - Memory optimization needed?
 * 
 * TIPS:
 * 1. Discuss read vs write path separately
 * 2. Consider mobile vs desktop differences
 * 3. Plan for A/B testing different algorithms
 * 4. Mention privacy (don't suggest sensitive queries)
 * 5. Think about censorship/filtering
 */

// YOUR DESIGN HERE:
// Design trie structure, ranking algorithm, explain caching


// ============================================
// INTERVIEW TIPS FOR SYSTEM DESIGN
// ============================================

/**
 * STEP-BY-STEP APPROACH:
 * 
 * 1. CLARIFY REQUIREMENTS (5 minutes)
 *    - Ask about functional requirements
 *    - Ask about non-functional requirements (scale, performance)
 *    - Ask about constraints
 *    - Ask about what to focus on
 * 
 * 2. ESTIMATE SCALE (5 minutes)
 *    - Number of users
 *    - Requests per second
 *    - Storage requirements
 *    - Bandwidth
 *    Example: "100M users, 10 requests/user/day = 1B requests/day"
 * 
 * 3. HIGH-LEVEL DESIGN (10 minutes)
 *    - Draw boxes for major components
 *    - Show data flow
 *    - Explain each component's role
 *    - Keep it simple first
 * 
 * 4. DEEP DIVE (15 minutes)
 *    - Dig into interesting components
 *    - Discuss algorithms and data structures
 *    - Talk about trade-offs
 *    - Address bottlenecks
 * 
 * 5. IDENTIFY BOTTLENECKS (5 minutes)
 *    - What could fail?
 *    - What could be slow?
 *    - How to scale each component?
 * 
 * 6. DISCUSS TRADE-OFFS (Throughout)
 *    - Consistency vs Availability (CAP theorem)
 *    - Read-heavy vs Write-heavy
 *    - SQL vs NoSQL
 *    - Caching trade-offs
 *    - Cost vs Performance
 * 
 * COMMON COMPONENTS TO DISCUSS:
 * 
 * 1. Load Balancer
 *    - Why: Distribute traffic
 *    - Types: Round-robin, least connections, IP hash
 *    - Layer: L4 (transport) or L7 (application)
 * 
 * 2. API Gateway
 *    - Why: Single entry point, routing
 *    - Features: Auth, rate limiting, logging
 * 
 * 3. Application Servers
 *    - Why: Business logic
 *    - Stateless (for horizontal scaling)
 * 
 * 4. Database
 *    - SQL: ACID, relationships, complex queries
 *    - NoSQL: Scale, flexibility, eventual consistency
 *    - When to use each?
 * 
 * 5. Cache
 *    - Why: Reduce DB load, faster reads
 *    - Types: In-memory (Redis), CDN
 *    - Eviction: LRU, LFU, TTL
 *    - Invalidation: Challenging!
 * 
 * 6. Message Queue
 *    - Why: Async processing, decoupling
 *    - Examples: Kafka, RabbitMQ, SQS
 *    - Use cases: Notifications, background jobs
 * 
 * 7. CDN
 *    - Why: Serve static content close to users
 *    - What: Images, videos, CSS, JS
 * 
 * 8. Object Storage
 *    - Why: Large files, media
 *    - Examples: S3, GCS
 * 
 * KEY CONCEPTS:
 * 
 * 1. CAP Theorem
 *    - Consistency: All nodes see same data
 *    - Availability: Every request gets response
 *    - Partition Tolerance: System works despite network failures
 *    - You can only have 2 of 3
 *    - In practice: Network partitions happen, choose CP or AP
 * 
 * 2. Scaling
 *    - Vertical: Bigger machine (limited)
 *    - Horizontal: More machines (preferred)
 * 
 * 3. Sharding
 *    - Why: Split large database across servers
 *    - Methods: Range, Hash, Directory
 *    - Challenges: Rebalancing, cross-shard queries
 * 
 * 4. Replication
 *    - Why: High availability, read scaling
 *    - Types: Master-slave, master-master
 *    - Challenges: Consistency, lag
 * 
 * 5. Consistency Models
 *    - Strong: Immediate consistency
 *    - Eventual: Consistency over time
 *    - Causal: Preserve cause-effect order
 * 
 * NUMBERS TO REMEMBER:
 * - L1 cache: 0.5 ns
 * - L2 cache: 7 ns
 * - RAM: 100 ns
 * - SSD: 150 μs
 * - HDD: 10 ms
 * - Network within datacenter: 0.5 ms
 * - Network across continent: 150 ms
 * 
 * QPS GUIDELINES:
 * - 1,000 QPS: Single server
 * - 10,000 QPS: Need load balancing
 * - 100,000 QPS: Need caching, read replicas
 * - 1,000,000 QPS: Need sharding, CDN
 * 
 * RED FLAGS TO AVOID:
 * - Jumping to details too quickly
 * - Not asking clarifying questions
 * - Ignoring scale/requirements
 * - Not discussing trade-offs
 * - Overcomplicating unnecessarily
 * - Not considering failures
 * - Forgetting about monitoring
 * 
 * GREEN FLAGS TO SHOW:
 * - Ask good questions
 * - Think out loud
 * - Draw diagrams
 * - Discuss multiple approaches
 * - Mention trade-offs
 * - Consider edge cases
 * - Plan for failures
 * - Think about metrics/monitoring
 */

module.exports = {
  // No solutions provided - design them yourself!
  // Use the tips and considerations above
};
