/**
 * 🔥 CHALLENGE 15: Email Threading System
 * 
 * Difficulty: 🔴 HARD
 * Concepts: Tree + LinkedList for Nested Replies
 * Based on: Chapter 9, 10
 * 
 * ============================================================================
 * Build Gmail-style email threading! Group related emails, nest replies!
 * ============================================================================
 */

class Email {
    constructor(id, subject, from, to, body, timestamp, replyTo = null) {
        this.id = id;
        this.subject = subject;
        this.from = from;
        this.to = to;
        this.body = body;
        this.timestamp = timestamp;
        this.replyTo = replyTo; // Parent email ID
    }
}

class EmailNode {
    constructor(email) {
        this.email = email;
        this.replies = []; // Children emails
        this.parent = null;
    }
}

class EmailThreader {
    constructor() {
        this.emails = new Map(); // id -> EmailNode
        this.threads = []; // Root emails (no parent)
    }

    addEmail(email) {
        // YOUR CODE HERE
        // Build tree structure based on replyTo
    }

    getThread(emailId) {
        // YOUR CODE HERE
        // Get entire thread for an email
    }

    collapseThread(emailId) {
        // YOUR CODE HERE
        // Hide replies (mark as collapsed)
    }

    expandThread(emailId) {
        // YOUR CODE HERE
        // Show all nested replies
    }

    sortThreadsByLatest() {
        // YOUR CODE HERE
        // Sort by most recent reply
    }

    searchInThread(emailId, keyword) {
        // YOUR CODE HERE
        // Search within a thread
    }

    getThreadDepth(emailId) {
        // YOUR CODE HERE
        // Calculate nesting level
    }

    flattenThread(emailId) {
        // YOUR CODE HERE
        // Convert tree to array (DFS)
    }
}

// TEST
const threader = new EmailThreader();

const email1 = new Email(1, "Project Update", "alice@co.com", "team@co.com", "Status report", Date.now());
const email2 = new Email(2, "Re: Project Update", "bob@co.com", "alice@co.com", "Looks good", Date.now(), 1);
const email3 = new Email(3, "Re: Project Update", "charlie@co.com", "bob@co.com", "Agreed", Date.now(), 2);

threader.addEmail(email1);
threader.addEmail(email2);
threader.addEmail(email3);

console.log("Build email threads!");
console.log("Threads:", threader.threads.length);
