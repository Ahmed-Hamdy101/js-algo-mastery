/**
 * 🔥 CHALLENGE 09: Duplicate File Finder
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: Map + Set + QuickSort
 * Based on: Chapter 3, 4, 5
 * 
 * ============================================================================
 * Build CCleaner-style duplicate finder! Hash files, find duplicates, sort by size.
 * ============================================================================
 */

class FileFinder {
    constructor() {
        this.files = [];
        this.hashMap = new Map();
    }

    addFile(name, content, size) {
        const hash = this.simpleHash(content);
        const file = { name, content, size, hash };
        this.files.push(file);
        
        if (!this.hashMap.has(hash)) {
            this.hashMap.set(hash, []);
        }
        this.hashMap.get(hash).push(file);
    }

    simpleHash(content) {
        let hash = 0;
        for (let i = 0; i < content.length; i++) {
            hash = ((hash << 5) - hash) + content.charCodeAt(i);
        }
        return hash.toString();
    }

    findDuplicates() {
        // YOUR CODE HERE
        // Return array of duplicate groups
    }

    calculateWastedSpace() {
        // YOUR CODE HERE
        // Calculate total space used by duplicates
    }

    sortBySize(ascending = false) {
        // YOUR CODE HERE
        // Use QuickSort from Chapter 3
    }

    getUniqueFiles() {
        // YOUR CODE HERE
        // Return files that have no duplicates
    }
}

// TEST
const finder = new FileFinder();
finder.addFile("doc1.txt", "hello world", 11);
finder.addFile("doc2.txt", "hello world", 11);
finder.addFile("doc3.txt", "different content", 17);
finder.addFile("doc4.txt", "hello world", 11);

console.log("Files:", finder.files.length);
console.log("Find and report duplicates!");
