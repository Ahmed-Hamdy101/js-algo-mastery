/**
 * 🔥 CHALLENGE 03: Concert Ticket Queue System
 * 
 * Difficulty: 🟢 EASY
 * Concepts: Queue (FIFO), Fair Scheduling
 * Based on: Chapter 7
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * You're building a fair ticket booking system for a major concert.
 * When tickets sell out, users join a queue. First come, first served!
 * 
 * ============================================================================
 * REQUIREMENTS:
 * ============================================================================
 * 1. Implement Queue with FIFO (First In, First Out) principle
 * 2. Users join queue when tickets unavailable
 * 3. Process requests in order (no queue jumping!)
 * 4. Handle queue timeout (remove users after 5 minutes)
 * 5. Display queue position to users
 * 6. Auto-assign tickets when available
 * 7. Prevent duplicate entries in queue
 * 
 * ============================================================================
 * COMPLEXITY TARGETS:
 * ============================================================================
 * - joinQueue: O(1)
 * - processNext: O(1)
 * - getPosition: O(n) - acceptable for this use case
 * - removeFromQueue: O(n)
 * 
 * ============================================================================
 * YOUR MISSION:
 * ============================================================================
 * Complete the TicketQueue class. Make it fair and efficient!
 */

class TicketQueue {
    constructor(availableTickets = 0, timeoutMinutes = 5) {
        this.queue = []; // Array-based queue
        this.availableTickets = availableTickets;
        this.timeoutMinutes = timeoutMinutes;
        this.userIdCounter = 1;
        this.processedCount = 0;
    }

    /**
     * User joins the queue
     * @param {string} username - user's name
     * @param {string} email - user's email
     * @returns {Object} queue entry with position
     * 
     * TODO: Add user to queue, check for duplicates, return position
     */
    joinQueue(username, email) {
        // YOUR CODE HERE
        
    }

    /**
     * Process next person in queue (assign ticket)
     * @returns {Object|null} processed user or null
     * 
     * TODO: Remove first person from queue, assign ticket, return user
     * This is the core FIFO operation!
     */
    processNext() {
        // YOUR CODE HERE
        
    }

    /**
     * Get user's position in queue
     * @param {string} email - user's email
     * @returns {number} position (1-based) or -1 if not found
     * 
     * TODO: Search queue and return position
     */
    getPosition(email) {
        // YOUR CODE HERE
        
    }

    /**
     * Remove user from queue (voluntary leave or timeout)
     * @param {string} email - user's email
     * @returns {boolean} success status
     * 
     * TODO: Remove user from any position in queue
     */
    removeFromQueue(email) {
        // YOUR CODE HERE
        
    }

    /**
     * Get all users currently in queue
     * @returns {Array} queue entries
     */
    getAllInQueue() {
        // YOUR CODE HERE
        
    }

    /**
     * Check if user is already in queue
     * @param {string} email
     * @returns {boolean}
     */
    isInQueue(email) {
        // YOUR CODE HERE
        
    }

    /**
     * Get queue size
     * @returns {number}
     */
    getQueueSize() {
        // YOUR CODE HERE
        
    }

    /**
     * Get estimated wait time
     * @param {string} email - user's email
     * @returns {number} estimated minutes
     * 
     * TODO: Calculate based on position and processing rate
     * Assume 1 ticket processed per minute
     */
    getEstimatedWaitTime(email) {
        // YOUR CODE HERE
        
    }

    /**
     * Process batch of users
     * @param {number} count - number of users to process
     * @returns {Array} processed users
     * 
     * TODO: Process multiple queue entries at once
     */
    processBatch(count) {
        // YOUR CODE HERE
        
    }

    /**
     * Remove timed-out users
     * @returns {number} number removed
     * 
     * TODO: Check timestamps, remove users who exceeded timeout
     * For simulation, assume each minute is a "tick"
     */
    removeTimedOutUsers(currentTime) {
        // YOUR CODE HERE
        
    }

    /**
     * Add more tickets (makes more available)
     * @param {number} count
     */
    addTickets(count) {
        // YOUR CODE HERE
        
    }

    /**
     * Get stats for dashboard
     * @returns {Object} statistics
     */
    getStats() {
        return {
            queueSize: this.getQueueSize(),
            availableTickets: this.availableTickets,
            processedCount: this.processedCount,
            averageWaitTime: this.getQueueSize() // simplified
        };
    }
}

// ============================================================================
// TEST CASES - DO NOT MODIFY
// ============================================================================

console.log("🧪 TEST SUITE: Ticket Queue System");
console.log("================================\n");

const ticketQueue = new TicketQueue(2, 5); // 2 tickets, 5 min timeout

// Test 1: Users join queue
console.log("✅ Test 1: Users Join Queue");
const user1 = ticketQueue.joinQueue("Alice", "alice@email.com");
const user2 = ticketQueue.joinQueue("Bob", "bob@email.com");
const user3 = ticketQueue.joinQueue("Charlie", "charlie@email.com");
console.log(`Queue size: ${ticketQueue.getQueueSize()}`);
console.log("Expected: 3 users in queue\n");

// Test 2: Check positions
console.log("✅ Test 2: Check Queue Positions");
console.log(`Alice position: ${ticketQueue.getPosition("alice@email.com")}`);
console.log(`Bob position: ${ticketQueue.getPosition("bob@email.com")}`);
console.log(`Charlie position: ${ticketQueue.getPosition("charlie@email.com")}`);
console.log("Expected: 1, 2, 3\n");

// Test 3: Process tickets
console.log("✅ Test 3: Process Next User (FIFO)");
const processed1 = ticketQueue.processNext();
console.log(`Processed: ${processed1 ? processed1.username : "None"}`);
console.log(`Queue size now: ${ticketQueue.getQueueSize()}`);
console.log("Expected: Alice processed, 2 in queue\n");

// Test 4: Prevent duplicates
console.log("✅ Test 4: Prevent Duplicate Entry");
const duplicate = ticketQueue.joinQueue("Bob", "bob@email.com");
console.log(`Duplicate join result: ${duplicate ? "ALLOWED" : "BLOCKED"}`);
console.log("Expected: BLOCKED (null or false)\n");

// Test 5: Remove from queue
console.log("✅ Test 5: User Leaves Queue");
const removed = ticketQueue.removeFromQueue("charlie@email.com");
console.log(`Charlie removed: ${removed}`);
console.log(`Queue size: ${ticketQueue.getQueueSize()}`);
console.log("Expected: true, 1 in queue\n");

// Test 6: Process remaining
console.log("✅ Test 6: Process Remaining Users");
const processed2 = ticketQueue.processNext();
console.log(`Processed: ${processed2 ? processed2.username : "None"}`);
console.log(`Queue empty: ${ticketQueue.getQueueSize() === 0}`);
console.log("Expected: Bob processed, queue empty\n");

// ============================================================================
// SCENARIO TEST: Rush Hour
// ============================================================================

console.log("📖 SCENARIO TEST: Ticket Rush");
console.log("================================\n");

const rushQueue = new TicketQueue(5, 10);

console.log("🎫 Simulating concert ticket rush...\n");

// 10 users try to get 5 tickets
const users = [
    { name: "User1", email: "user1@test.com" },
    { name: "User2", email: "user2@test.com" },
    { name: "User3", email: "user3@test.com" },
    { name: "User4", email: "user4@test.com" },
    { name: "User5", email: "user5@test.com" },
    { name: "User6", email: "user6@test.com" },
    { name: "User7", email: "user7@test.com" },
    { name: "User8", email: "user8@test.com" },
    { name: "User9", email: "user9@test.com" },
    { name: "User10", email: "user10@test.com" },
];

// Everyone joins queue
users.forEach(user => {
    rushQueue.joinQueue(user.name, user.email);
});

console.log(`Total in queue: ${rushQueue.getQueueSize()}`);
console.log(`Available tickets: ${rushQueue.availableTickets}`);

// Process 5 tickets
console.log("\n⚡ Processing tickets...");
const winners = rushQueue.processBatch(5);
console.log(`Tickets assigned to: ${winners.map(w => w.username).join(", ")}`);
console.log(`Remaining in queue: ${rushQueue.getQueueSize()}`);
console.log("\nExpected: First 5 users get tickets, 5 remain in queue");

// Show stats
console.log("\n📊 Final Stats:");
console.log(rushQueue.getStats());

// ============================================================================
// EDGE CASE TESTS
// ============================================================================

console.log("\n🔬 EDGE CASE TESTS");
console.log("================================\n");

const edgeQueue = new TicketQueue(0, 5);

console.log("Test: Process when queue is empty");
const emptyResult = edgeQueue.processNext();
console.log(`Result: ${emptyResult || "null (correct)"}`);

console.log("\nTest: Get position of non-existent user");
const fakePosition = edgeQueue.getPosition("fake@email.com");
console.log(`Position: ${fakePosition} (should be -1)`);

console.log("\nTest: Remove from empty queue");
const removeEmpty = edgeQueue.removeFromQueue("fake@email.com");
console.log(`Remove result: ${removeEmpty} (should be false)`);

// ============================================================================
// QUESTIONS TO ANSWER (Write in comments):
// ============================================================================
/*
 * Q1: Why must we use FIFO for ticket queues? What would happen with LIFO?
 * A1: 
 * 
 * Q2: How would you prevent users from creating multiple accounts to join queue?
 * A2: 
 * 
 * Q3: What's the tradeoff of O(n) for removeFromQueue? Can we do better?
 * A3: 
 * 
 * Q4: How would you implement priority queue (VIP users first)?
 * A4: 
 * 
 * Q5: How would you scale this for 100,000 concurrent users?
 * A5: 
 */

// ============================================================================
// HINTS (Only look if stuck for 30+ minutes!)
// ============================================================================
/*
 * HINT 1: Queue uses push() to enqueue, shift() to dequeue
 * HINT 2: Check duplicates with isInQueue() before joining
 * HINT 3: Position is index + 1 (convert 0-based to 1-based)
 * HINT 4: Remove user with splice() after finding index
 * HINT 5: processBatch() calls processNext() in a loop
 */

// ============================================================================
// BONUS CHALLENGES:
// ============================================================================
/*
 * 🎯 BONUS 1: Implement priority queue (VIP, premium, regular tiers)
 * 🎯 BONUS 2: Add real-time notifications (simulate with callbacks)
 * 🎯 BONUS 3: Implement "hold" mechanism (reserve for 10 min while user pays)
 * 🎯 BONUS 4: Add queue statistics and analytics
 * 🎯 BONUS 5: Handle queue overflow (max queue size)
 * 🎯 BONUS 6: Implement fair randomization for equal timestamp entries
 */
