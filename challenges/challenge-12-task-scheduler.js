/**
 * 🔥 CHALLENGE 12: Task Scheduler with Priority
 * 
 * Difficulty: 🔴 HARD
 * Concepts: Priority Queue + Stack
 * Based on: Chapter 6, 7
 * 
 * ============================================================================
 * Build Celery/Bull queue! Tasks with priority, retry failed tasks!
 * ============================================================================
 */

class Task {
    constructor(id, name, priority, callback) {
        this.id = id;
        this.name = name;
        this.priority = priority; // 1=high, 10=low
        this.callback = callback;
        this.attempts = 0;
        this.maxAttempts = 3;
    }
}

class TaskScheduler {
    constructor() {
        this.queue = [];
        this.failedStack = [];
        this.completed = [];
    }

    addTask(name, priority, callback) {
        // YOUR CODE HERE
        // Insert based on priority
    }

    processNext() {
        // YOUR CODE HERE
        // Process highest priority task
    }

    retryFailed() {
        // YOUR CODE HERE
        // Pop from failed stack and retry
    }

    getStats() {
        // YOUR CODE HERE
    }
}

// TEST
const scheduler = new TaskScheduler();
scheduler.addTask("Low priority", 10, () => console.log("Low"));
scheduler.addTask("High priority", 1, () => console.log("High"));
scheduler.addTask("Medium", 5, () => console.log("Med"));
console.log("Process by priority!");
