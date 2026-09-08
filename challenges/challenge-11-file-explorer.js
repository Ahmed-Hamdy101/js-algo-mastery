/**
 * 🔥 CHALLENGE 11: File System Explorer
 * 
 * Difficulty: 🔴 HARD
 * Concepts: Tree (N-ary), DFS/BFS
 * Based on: Chapter 10
 * 
 * ============================================================================
 * Build VS Code-style file explorer with tree structure!
 * ============================================================================
 */

class FileNode {
    constructor(name, isDirectory = false) {
        this.name = name;
        this.isDirectory = isDirectory;
        this.children = [];
        this.size = 0;
        this.parent = null;
    }
}

class FileSystemExplorer {
    constructor() {
        this.root = new FileNode("/", true);
    }

    addFile(path, size) {
        // YOUR CODE HERE
    }

    addDirectory(path) {
        // YOUR CODE HERE
    }

    searchByName(name) {
        // YOUR CODE HERE - Use DFS or BFS
    }

    calculateFolderSize(path) {
        // YOUR CODE HERE - Recursive sum
    }

    listFiles(path) {
        // YOUR CODE HERE
    }

    deleteNode(path) {
        // YOUR CODE HERE
    }
}

// TEST
const fs = new FileSystemExplorer();
fs.addDirectory("/projects");
fs.addDirectory("/projects/app");
fs.addFile("/projects/app/index.js", 1024);
console.log("Build that file tree!");
