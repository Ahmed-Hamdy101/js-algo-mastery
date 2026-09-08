/**
 * 🔥 CHALLENGE 06: Autocomplete Search Engine
 * 
 * Difficulty: 🔴 HARD
 * Concepts: Trie/Prefix Tree, Binary Search
 * Based on: Chapter 10 (Trees)
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * Build Google-like autocomplete for a search bar. As users type, show
 * instant suggestions. Must be FAST with 10,000+ words!
 * 
 * ============================================================================
 * REQUIREMENTS:
 * ============================================================================
 * 1. Store 10,000+ words efficiently
 * 2. Find suggestions as user types (prefix matching)
 * 3. Return top 5 suggestions
 * 4. Rank by frequency/popularity
 * 5. Handle typos with fuzzy matching (BONUS)
 * 6. Support Unicode and special characters
 * 
 * ============================================================================
 * COMPLEXITY TARGETS:
 * ============================================================================
 * - insert: O(m) where m = word length
 * - search: O(m) for exact match
 * - getSuggestions: O(p + n) where p = prefix length, n = suggestions
 * 
 * ============================================================================
 * YOUR MISSION:
 * ============================================================================
 * Implement Trie (Prefix Tree) for blazing-fast autocomplete!
 */

class TrieNode {
    constructor() {
        this.children = new Map(); // char -> TrieNode
        this.isEndOfWord = false;
        this.word = null; // Store complete word
        this.frequency = 0; // For ranking
    }
}

class Autocomplete {
    constructor() {
        this.root = new TrieNode();
        this.wordCount = 0;
    }

    /**
     * Insert word into trie
     * @param {string} word
     * @param {number} frequency - popularity score
     * 
     * TODO: Build trie structure character by character
     */
    insert(word, frequency = 1) {
        // YOUR CODE HERE
        
    }

    /**
     * Check if word exists (exact match)
     * @param {string} word
     * @returns {boolean}
     */
    search(word) {
        // YOUR CODE HERE
        
    }

    /**
     * Check if prefix exists
     * @param {string} prefix
     * @returns {boolean}
     */
    startsWith(prefix) {
        // YOUR CODE HERE
        
    }

    /**
     * Get autocomplete suggestions
     * @param {string} prefix
     * @param {number} limit
     * @returns {Array} suggestions sorted by frequency
     * 
     * TODO: 
     * 1. Find node at prefix
     * 2. DFS/BFS to collect all words below
     * 3. Sort by frequency
     * 4. Return top N
     */
    getSuggestions(prefix, limit = 5) {
        // YOUR CODE HERE
        
    }

    /**
     * Helper: Collect all words from node
     * @param {TrieNode} node
     * @param {Array} results
     */
    _collectWords(node, results) {
        // YOUR CODE HERE
        
    }

    /**
     * Delete word from trie
     * @param {string} word
     * @returns {boolean}
     */
    delete(word) {
        // YOUR CODE HERE
        
    }

    /**
     * Get word count
     * @returns {number}
     */
    size() {
        return this.wordCount;
    }

    /**
     * Update word frequency
     * @param {string} word
     */
    incrementFrequency(word) {
        // YOUR CODE HERE
        
    }

    /**
     * Get all words (for debugging)
     * @returns {Array}
     */
    getAllWords() {
        const results = [];
        this._collectWords(this.root, results);
        return results.map(r => r.word);
    }
}

// ============================================================================
// TEST CASES
// ============================================================================

console.log("🧪 TEST SUITE: Autocomplete Engine");
console.log("================================\n");

const autocomplete = new Autocomplete();

// Load dictionary
const words = [
    "apple", "application", "apply", "apex", "apartment",
    "banana", "band", "bandana", "bank", "basketball",
    "cat", "car", "card", "career", "careful",
    "dog", "door", "double", "download", "dragon"
];

words.forEach(word => autocomplete.insert(word));

console.log("✅ Test 1: Basic Insertion");
console.log(`Words loaded: ${autocomplete.size()}`);
console.log("Expected: 20\n");

console.log("✅ Test 2: Exact Search");
console.log(`"apple" exists: ${autocomplete.search("apple")}`);
console.log(`"apples" exists: ${autocomplete.search("apples")}`);
console.log("Expected: true, false\n");

console.log("✅ Test 3: Prefix Check");
console.log(`Starts with "app": ${autocomplete.startsWith("app")}`);
console.log(`Starts with "xyz": ${autocomplete.startsWith("xyz")}`);
console.log("Expected: true, false\n");

console.log("✅ Test 4: Get Suggestions");
const suggestions = autocomplete.getSuggestions("app", 3);
console.log(`Suggestions for "app":`);
suggestions.forEach(s => console.log(`  - ${s.word} (freq: ${s.frequency})`));
console.log("Expected: apple, application, apply\n");

console.log("✅ Test 5: Frequency Ranking");
autocomplete.incrementFrequency("application");
autocomplete.incrementFrequency("application");
autocomplete.incrementFrequency("application");
const ranked = autocomplete.getSuggestions("app", 3);
console.log(`After increasing "application" frequency:`);
ranked.forEach((s, i) => console.log(`  ${i + 1}. ${s.word} (${s.frequency})`));
console.log("Expected: application first (higher frequency)\n");

// Performance test
console.log("⚡ PERFORMANCE TEST");
console.time("10k insertions");
for (let i = 0; i < 10000; i++) {
    autocomplete.insert(`word${i}`, Math.floor(Math.random() * 100));
}
console.timeEnd("10k insertions");

console.time("1k searches");
for (let i = 0; i < 1000; i++) {
    autocomplete.getSuggestions(`word${i}`, 5);
}
console.timeEnd("1k searches");

// ============================================================================
// QUESTIONS TO ANSWER
// ============================================================================
/*
 * Q1: Why is Trie better than array for autocomplete?
 * A1: 
 * 
 * Q2: What's the space complexity of a Trie?
 * A2: 
 * 
 * Q3: How would you implement fuzzy matching (typo tolerance)?
 * A3: 
 */

// ============================================================================
// BONUS CHALLENGES:
// ============================================================================
/*
 * 🎯 BONUS 1: Implement fuzzy search (handle 1-char typos)
 * 🎯 BONUS 2: Add word stemming (run, running, ran -> run)
 * 🎯 BONUS 3: Support phrase autocomplete (multi-word)
 * 🎯 BONUS 4: Cache popular suggestions
 * 🎯 BONUS 5: Implement "Did you mean?" suggestions
 */
