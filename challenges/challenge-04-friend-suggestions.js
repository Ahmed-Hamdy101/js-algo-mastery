/**
 * 🔥 CHALLENGE 04: Social Media Friend Suggestions
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: Set Operations (Union, Intersection, Difference)
 * Based on: Chapter 4
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * Build a "People You May Know" feature like LinkedIn or Facebook.
 * Use Set operations to find mutual friends and suggest connections.
 * 
 * ============================================================================
 * REQUIREMENTS:
 * ============================================================================
 * 1. Implement custom Set operations from scratch
 * 2. Find mutual friends (intersection of friend lists)
 * 3. Find all potential connections (union of networks)
 * 4. Find friends-of-friends (2nd degree connections)
 * 5. Rank suggestions by number of mutual friends
 * 6. Exclude already-connected and blocked users
 * 
 * ============================================================================
 * COMPLEXITY TARGETS:
 * ============================================================================
 * - getMutualFriends: O(n + m) where n, m are friend list sizes
 * - getSuggestions: O(n * m) acceptable for this use case
 * - rankSuggestions: O(n log n) for sorting
 * 
 * ============================================================================
 * YOUR MISSION:
 * ============================================================================
 * Complete the SocialNetwork class. Make smart friend suggestions!
 */

class SocialNetwork {
    constructor() {
        this.users = new Map(); // userId -> user data
        this.friendships = new Map(); // userId -> Set of friend IDs
        this.blockedUsers = new Map(); // userId -> Set of blocked IDs
    }

    /**
     * Add a user to the network
     * @param {number} userId
     * @param {string} name
     * @param {Array} interests - optional
     */
    addUser(userId, name, interests = []) {
        // YOUR CODE HERE
        
    }

    /**
     * Create friendship between two users
     * @param {number} userId1
     * @param {number} userId2
     * @returns {boolean} success
     */
    addFriendship(userId1, userId2) {
        // YOUR CODE HERE
        
    }

    /**
     * Block a user
     * @param {number} userId - who is blocking
     * @param {number} blockedId - who to block
     */
    blockUser(userId, blockedId) {
        // YOUR CODE HERE
        
    }

    /**
     * Get mutual friends between two users
     * @param {number} userId1
     * @param {number} userId2
     * @returns {Set} mutual friend IDs
     * 
     * TODO: Implement SET INTERSECTION
     * This is key to friend suggestions!
     */
    getMutualFriends(userId1, userId2) {
        // YOUR CODE HERE
        
    }

    /**
     * Get ALL friends from both users (combined network)
     * @param {number} userId1
     * @param {number} userId2
     * @returns {Set} union of friend IDs
     * 
     * TODO: Implement SET UNION
     */
    getCombinedNetwork(userId1, userId2) {
        // YOUR CODE HERE
        
    }

    /**
     * Get friends of friends (2nd degree connections)
     * @param {number} userId
     * @returns {Set} 2nd degree connection IDs
     * 
     * TODO: Get friends of each friend, exclude direct friends
     * This is SET UNION of all friend lists, minus direct friends
     */
    getFriendsOfFriends(userId) {
        // YOUR CODE HERE
        
    }

    /**
     * Get friend suggestions for a user
     * @param {number} userId
     * @param {number} limit - max suggestions
     * @returns {Array} suggested users with mutual friend count
     * 
     * TODO: Main algorithm!
     * 1. Get friends of friends
     * 2. Exclude already friends
     * 3. Exclude blocked users
     * 4. Count mutual friends for each
     * 5. Sort by mutual friend count
     * 6. Return top N
     */
    getSuggestions(userId, limit = 5) {
        // YOUR CODE HERE
        
    }

    /**
     * Check if two users are friends
     * @param {number} userId1
     * @param {number} userId2
     * @returns {boolean}
     */
    areFriends(userId1, userId2) {
        // YOUR CODE HERE
        
    }

    /**
     * Get all friends of a user
     * @param {number} userId
     * @returns {Array} friend user objects
     */
    getFriends(userId) {
        // YOUR CODE HERE
        
    }

    /**
     * Calculate connection strength
     * @param {number} userId1
     * @param {number} userId2
     * @returns {number} score (0-100)
     * 
     * TODO: Base on mutual friends, shared interests
     * This is a BONUS - make it smart!
     */
    calculateConnectionStrength(userId1, userId2) {
        // YOUR CODE HERE
        
    }

    /**
     * Get network statistics for a user
     * @param {number} userId
     * @returns {Object} stats
     */
    getNetworkStats(userId) {
        const friends = this.friendships.get(userId) || new Set();
        const friendsOfFriends = this.getFriendsOfFriends(userId);
        
        return {
            directFriends: friends.size,
            secondDegreeConnections: friendsOfFriends.size,
            networkReach: friends.size + friendsOfFriends.size
        };
    }
}

// ============================================================================
// TEST CASES - DO NOT MODIFY
// ============================================================================

console.log("🧪 TEST SUITE: Friend Suggestions");
console.log("================================\n");

const network = new SocialNetwork();

// Create test network
network.addUser(1, "Alice", ["coding", "music", "travel"]);
network.addUser(2, "Bob", ["coding", "gaming"]);
network.addUser(3, "Charlie", ["music", "travel"]);
network.addUser(4, "Diana", ["coding", "music"]);
network.addUser(5, "Eve", ["gaming", "travel"]);
network.addUser(6, "Frank", ["coding", "music"]);
network.addUser(7, "Grace", ["travel"]);

// Create friendships
network.addFriendship(1, 2); // Alice - Bob
network.addFriendship(1, 3); // Alice - Charlie
network.addFriendship(1, 4); // Alice - Diana
network.addFriendship(2, 4); // Bob - Diana
network.addFriendship(2, 5); // Bob - Eve
network.addFriendship(3, 6); // Charlie - Frank
network.addFriendship(4, 6); // Diana - Frank
network.addFriendship(5, 7); // Eve - Grace

// Test 1: Mutual Friends
console.log("✅ Test 1: Mutual Friends");
const mutualAB = network.getMutualFriends(1, 2);
console.log(`Alice and Bob mutual friends: ${mutualAB.size}`);
console.log("Expected: 1 mutual friend (Diana)\n");

// Test 2: Combined Network
console.log("✅ Test 2: Combined Network");
const combined = network.getCombinedNetwork(1, 2);
console.log(`Alice + Bob combined network size: ${combined.size}`);
console.log("Expected: 5 total unique friends\n");

// Test 3: Friends of Friends
console.log("✅ Test 3: Friends of Friends");
const fof = network.getFriendsOfFriends(1);
console.log(`Alice's 2nd degree connections: ${fof.size}`);
console.log(`Includes: ${Array.from(fof).map(id => network.users.get(id).name).join(", ")}`);
console.log("Expected: Eve, Frank (not direct friends)\n");

// Test 4: Friend Suggestions
console.log("✅ Test 4: Friend Suggestions for Alice");
const suggestions = network.getSuggestions(1, 3);
console.log("Top 3 suggestions:");
suggestions.forEach((suggestion, i) => {
    const user = network.users.get(suggestion.userId);
    console.log(`  ${i + 1}. ${user.name} (${suggestion.mutualFriends} mutual friends)`);
});
console.log("Expected: Frank (2 mutual), Eve (1 mutual)...\n");

// Test 5: Block and Verify
console.log("✅ Test 5: Blocked Users Excluded");
network.blockUser(1, 5); // Alice blocks Eve
const suggestionsAfterBlock = network.getSuggestions(1, 5);
const hasEve = suggestionsAfterBlock.some(s => s.userId === 5);
console.log(`Eve in suggestions after block: ${hasEve}`);
console.log("Expected: false (blocked users excluded)\n");

// Test 6: Network Stats
console.log("✅ Test 6: Network Statistics");
const aliceStats = network.getNetworkStats(1);
console.log(`Alice's network:`);
console.log(`  Direct friends: ${aliceStats.directFriends}`);
console.log(`  2nd degree: ${aliceStats.secondDegreeConnections}`);
console.log(`  Total reach: ${aliceStats.networkReach}`);
console.log("");

// ============================================================================
// SCENARIO TEST: Real-World Usage
// ============================================================================

console.log("📖 SCENARIO TEST: Growing Network");
console.log("================================\n");

const realNetwork = new SocialNetwork();

// Simulate a user joining and building network
console.log("New user Helen joins the network...");
realNetwork.addUser(100, "Helen", ["coding", "travel"]);

console.log("Helen makes 3 friends...");
realNetwork.addUser(101, "Ian", ["coding"]);
realNetwork.addUser(102, "Jane", ["travel"]);
realNetwork.addUser(103, "Kyle", ["coding", "gaming"]);

realNetwork.addFriendship(100, 101);
realNetwork.addFriendship(100, 102);
realNetwork.addFriendship(100, 103);

console.log("Helen's friends make more friends...");
realNetwork.addUser(104, "Laura", ["coding"]);
realNetwork.addUser(105, "Mike", ["travel"]);
realNetwork.addUser(106, "Nina", ["gaming"]);

realNetwork.addFriendship(101, 104); // Ian - Laura
realNetwork.addFriendship(102, 105); // Jane - Mike
realNetwork.addFriendship(103, 106); // Kyle - Nina

console.log("\n🎯 Suggestions for Helen:");
const helenSuggestions = realNetwork.getSuggestions(100, 5);
helenSuggestions.forEach((s, i) => {
    const user = realNetwork.users.get(s.userId);
    console.log(`  ${i + 1}. ${user.name} - ${s.mutualFriends} mutual friend(s)`);
});

console.log("\nExpected: Laura, Mike, Nina (each 1 mutual friend)");

// ============================================================================
// QUESTIONS TO ANSWER (Write in comments):
// ============================================================================
/*
 * Q1: Why is Set intersection perfect for finding mutual friends?
 * A1: 
 * 
 * Q2: What's the difference between union and friends-of-friends?
 * A2: 
 * 
 * Q3: How would you handle users with 5000+ friends efficiently?
 * A3: 
 * 
 * Q4: Why rank suggestions by mutual friends? What else could you use?
 * A4: 
 * 
 * Q5: How would you prevent suggesting users from different countries/regions?
 * A5: 
 */

// ============================================================================
// HINTS (Only look if stuck for 30+ minutes!)
// ============================================================================
/*
 * HINT 1: Set intersection = new Set([...setA].filter(x => setB.has(x)))
 * HINT 2: Set union = new Set([...setA, ...setB])
 * HINT 3: For friends-of-friends, loop through friends, get their friends
 * HINT 4: Use Map to count mutual friends for sorting
 * HINT 5: Check blocked users before adding to suggestions
 */

// ============================================================================
// BONUS CHALLENGES:
// ============================================================================
/*
 * 🎯 BONUS 1: Implement "weak ties" suggestions (distant connections)
 * 🎯 BONUS 2: Add interest-based matching (suggest by shared hobbies)
 * 🎯 BONUS 3: Implement "trending" users (popular in your network)
 * 🎯 BONUS 4: Add graph traversal (find shortest path between users)
 * 🎯 BONUS 5: Implement mutual group suggestions
 * 🎯 BONUS 6: Add machine learning scoring (combine multiple factors)
 */
