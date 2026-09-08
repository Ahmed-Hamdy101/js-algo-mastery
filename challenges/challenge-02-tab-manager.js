/**
 * 🔥 CHALLENGE 02: Browser Tab Manager
 * 
 * Difficulty: 🟢 EASY
 * Concepts: Stack (LIFO), Undo/Redo Pattern
 * Based on: Chapter 6
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * Build a Chrome extension that manages browser tabs with undo/redo for
 * closed tabs. Users accidentally close tabs and want them back!
 * 
 * ============================================================================
 * REQUIREMENTS:
 * ============================================================================
 * 1. Implement Stack-based undo/redo for tab management
 * 2. Store tab information (url, title, timestamp)
 * 3. Undo closes last closed tab (restore it)
 * 4. Redo reopens previously undone tabs
 * 5. Limit history to last 20 tabs (memory management)
 * 6. Clear history after 24 hours (simulate with counter)
 * 
 * ============================================================================
 * COMPLEXITY TARGETS:
 * ============================================================================
 * - closeTab: O(1)
 * - undoClose: O(1)
 * - redoClose: O(1)
 * - getAllOpenTabs: O(n)
 * 
 * ============================================================================
 * YOUR MISSION:
 * ============================================================================
 * Complete the TabManager class using Stack principles!
 */

class TabManager {
    constructor(maxHistory = 20) {
        this.openTabs = []; // Currently open tabs
        this.closedTabs = []; // Stack for undo (closed tabs)
        this.redoStack = []; // Stack for redo
        this.maxHistory = maxHistory;
        this.tabIdCounter = 1;
    }

    /**
     * Open a new tab
     * @param {string} url - tab URL
     * @param {string} title - tab title
     * @returns {Object} created tab
     * 
     * TODO: Add tab to openTabs array, clear redo stack
     */
    openTab(url, title) {
        // YOUR CODE HERE
        
    }

    /**
     * Close a tab and add to undo stack
     * @param {number} tabId - ID of tab to close
     * @returns {Object|null} closed tab or null
     * 
     * TODO: Remove from openTabs, push to closedTabs stack
     * Remember: Limit stack to maxHistory!
     */
    closeTab(tabId) {
        // YOUR CODE HERE
        
    }

    /**
     * Undo last close (restore tab)
     * @returns {Object|null} restored tab or null
     * 
     * TODO: Pop from closedTabs, add to openTabs, push to redoStack
     */
    undoClose() {
        // YOUR CODE HERE
        
    }

    /**
     * Redo previously undone close
     * @returns {Object|null} re-closed tab or null
     * 
     * TODO: Pop from redoStack, remove from openTabs, push to closedTabs
     */
    redoClose() {
        // YOUR CODE HERE
        
    }

    /**
     * Get all currently open tabs
     * @returns {Array} list of open tabs
     */
    getAllOpenTabs() {
        // YOUR CODE HERE
        
    }

    /**
     * Get closed tabs history (for UI display)
     * @returns {Array} list of closed tabs (most recent first)
     */
    getClosedHistory() {
        // YOUR CODE HERE
        
    }

    /**
     * Clear all history (privacy mode)
     */
    clearHistory() {
        // YOUR CODE HERE
        
    }

    /**
     * Get tab by ID
     * @param {number} tabId
     * @returns {Object|null}
     */
    getTabById(tabId) {
        // YOUR CODE HERE
        
    }

    /**
     * Restore all recently closed tabs
     * @param {number} count - number of tabs to restore
     * @returns {Array} restored tabs
     * 
     * TODO: Restore last N closed tabs
     */
    restoreMultiple(count) {
        // YOUR CODE HERE
        
    }
}

// ============================================================================
// TEST CASES - DO NOT MODIFY
// ============================================================================

console.log("🧪 TEST SUITE: Tab Manager");
console.log("================================\n");

const manager = new TabManager(5); // Max 5 in history for testing

// Test 1: Open tabs
console.log("✅ Test 1: Open Multiple Tabs");
manager.openTab("https://google.com", "Google");
manager.openTab("https://github.com", "GitHub");
manager.openTab("https://stackoverflow.com", "Stack Overflow");
manager.openTab("https://mdn.dev", "MDN Web Docs");
console.log(`Open tabs: ${manager.getAllOpenTabs().length}`);
console.log("Expected: 4 tabs\n");

// Test 2: Close tab
console.log("✅ Test 2: Close a Tab");
const closedTab = manager.closeTab(2); // Close GitHub
console.log(`Closed: ${closedTab ? closedTab.title : "None"}`);
console.log(`Open tabs remaining: ${manager.getAllOpenTabs().length}`);
console.log("Expected: GitHub closed, 3 tabs remain\n");

// Test 3: Undo close
console.log("✅ Test 3: Undo Close Tab");
const restored = manager.undoClose();
console.log(`Restored: ${restored ? restored.title : "None"}`);
console.log(`Open tabs: ${manager.getAllOpenTabs().length}`);
console.log("Expected: GitHub restored, 4 tabs\n");

// Test 4: Redo close
console.log("✅ Test 4: Redo Close Tab");
const reclosed = manager.redoClose();
console.log(`Re-closed: ${reclosed ? reclosed.title : "None"}`);
console.log(`Open tabs: ${manager.getAllOpenTabs().length}`);
console.log("Expected: GitHub re-closed, 3 tabs\n");

// Test 5: Close multiple and test history limit
console.log("✅ Test 5: History Limit Test");
manager.closeTab(1); // Close Google
manager.closeTab(3); // Close Stack Overflow
manager.closeTab(4); // Close MDN
console.log(`Closed history size: ${manager.getClosedHistory().length}`);
console.log("Expected: 3 items in history (within limit)\n");

// Test 6: Restore multiple
console.log("✅ Test 6: Restore Multiple Tabs");
const restoredTabs = manager.restoreMultiple(2);
console.log(`Restored ${restoredTabs.length} tabs`);
console.log(`Open tabs: ${manager.getAllOpenTabs().length}`);
console.log("Expected: Restored 2, total 2 open\n");

// Test 7: New action clears redo
console.log("✅ Test 7: New Action Clears Redo Stack");
manager.undoClose(); // Undo once
manager.openTab("https://reddit.com", "Reddit"); // New action
const redoResult = manager.redoClose(); // Should not work
console.log(`Redo after new action: ${redoResult ? "SUCCESS" : "FAILED (correct!)"}`);
console.log("Expected: Redo should fail (null)\n");

// ============================================================================
// SCENARIO TESTS
// ============================================================================

console.log("📖 SCENARIO TEST: Real-World Usage");
console.log("================================\n");

const browser = new TabManager(20);

// Simulate user browsing session
console.log("User opens 5 tabs...");
browser.openTab("https://news.ycombinator.com", "Hacker News");
browser.openTab("https://dev.to", "Dev.to");
browser.openTab("https://twitter.com", "Twitter");
browser.openTab("https://linkedin.com", "LinkedIn");
browser.openTab("https://youtube.com", "YouTube");

console.log("User accidentally closes 3 tabs...");
browser.closeTab(2);
browser.closeTab(3);
browser.closeTab(5);

console.log("User wants back the last 2 closed tabs...");
browser.undoClose();
browser.undoClose();

console.log(`\n📊 Final state: ${browser.getAllOpenTabs().length} open tabs`);
console.log("Expected: 4 open tabs");

// ============================================================================
// QUESTIONS TO ANSWER (Write in comments):
// ============================================================================
/*
 * Q1: Why is Stack perfect for undo/redo functionality?
 * A1: 
 * 
 * Q2: What happens to the redo stack when a new tab is opened?
 * A2: 
 * 
 * Q3: Why limit history to 20 tabs? What's the tradeoff?
 * A3: 
 * 
 * Q4: How would you persist tab history across browser restarts?
 * A4: 
 * 
 * Q5: What's the space complexity of this implementation?
 * A5: 
 */

// ============================================================================
// HINTS (Only look if stuck for 30+ minutes!)
// ============================================================================
/*
 * HINT 1: Stack operations - push() adds to top, pop() removes from top
 * HINT 2: When opening new tab, clear redoStack (breaks redo chain)
 * HINT 3: Limit history by checking length before push
 * HINT 4: For restoreMultiple, use a loop with undoClose()
 * HINT 5: Use Array methods: push(), pop(), slice() for stacks
 */

// ============================================================================
// BONUS CHALLENGES:
// ============================================================================
/*
 * 🎯 BONUS 1: Add tab grouping (organize by domain)
 * 🎯 BONUS 2: Implement "Close all tabs to the right"
 * 🎯 BONUS 3: Add keyboard shortcuts simulation (Ctrl+Shift+T)
 * 🎯 BONUS 4: Track tab visit frequency (most visited)
 * 🎯 BONUS 5: Implement tab search by title/URL
 * 🎯 BONUS 6: Add tab pinning functionality
 */
