/**
 * 🔥 CHALLENGE 07: Chat Message History Navigator
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: LinkedList + Stack for Navigation
 * Based on: Chapter 6, 9
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * Build WhatsApp-like message history with prev/next navigation.
 * Users can scroll through millions of messages efficiently!
 * 
 * ============================================================================
 * YOUR MISSION: Implement efficient message navigation!
 * ============================================================================
 */

class Message {
    constructor(id, text, sender, timestamp) {
        this.id = id;
        this.text = text;
        this.sender = sender;
        this.timestamp = timestamp;
        this.read = false;
    }
}

class MessageNode {
    constructor(message) {
        this.message = message;
        this.next = null;
        this.prev = null;
    }
}

class ChatNavigator {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.unreadStack = [];
        this.messageCount = 0;
    }

    addMessage(text, sender) {
        // YOUR CODE HERE
    }

    nextMessage() {
        // YOUR CODE HERE
    }

    prevMessage() {
        // YOUR CODE HERE
    }

    jumpToUnread() {
        // YOUR CODE HERE
    }

    markAsRead(messageId) {
        // YOUR CODE HERE
    }

    searchByTimestamp(timestamp) {
        // YOUR CODE HERE
    }
}

// TEST
const chat = new ChatNavigator();
chat.addMessage("Hello", "Alice");
chat.addMessage("Hi!", "Bob");
console.log("Complete the implementation!");
