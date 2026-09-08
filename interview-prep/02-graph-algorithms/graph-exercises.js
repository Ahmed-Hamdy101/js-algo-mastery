/**
 * GRAPH ALGORITHMS FOR SENIOR INTERVIEWS
 * Real-world web development applications
 */

// ============================================
// EXERCISE 1: Course Schedule (Cycle Detection)
// ============================================

/**
 * Problem: Given prerequisites for courses, determine if it's possible to finish all courses
 * 
 * Example:
 * numCourses = 4
 * prerequisites = [[1,0], [2,1], [3,2]]
 * Output: true (can take 0->1->2->3)
 * 
 * Example 2:
 * prerequisites = [[1,0], [0,1]]
 * Output: false (cycle exists)
 * 
 * Web Dev Use Case: Dependency resolution, build systems, task scheduling
 */

// YOUR SOLUTION HERE:
function canFinish(numCourses, prerequisites) {
  // Implement cycle detection using DFS
}

// ============================================
// SOLUTION: Course Schedule
// ============================================

function canFinishSolution(numCourses, prerequisites) {
  // Build adjacency list
  const graph = new Array(numCourses).fill(0).map(() => []);
  
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }
  
  // 0 = unvisited, 1 = visiting, 2 = visited
  const state = new Array(numCourses).fill(0);
  
  function hasCycle(course) {
    if (state[course] === 1) return true; // Cycle detected
    if (state[course] === 2) return false; // Already checked
    
    state[course] = 1; // Mark as visiting
    
    for (const nextCourse of graph[course]) {
      if (hasCycle(nextCourse)) return true;
    }
    
    state[course] = 2; // Mark as visited
    return false;
  }
  
  // Check all courses
  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0 && hasCycle(i)) {
      return false;
    }
  }
  
  return true;
}

// Time: O(V + E), Space: O(V + E)

// ============================================
// EXERCISE 2: Clone Graph
// ============================================

/**
 * Problem: Deep clone a graph given a node reference
 * 
 * Web Dev Use Case: Deep copying objects, state management, undo/redo
 */

class GraphNode {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

// YOUR SOLUTION HERE:
function cloneGraph(node) {
  // Implement deep clone
}

// ============================================
// SOLUTION: Clone Graph
// ============================================

function cloneGraphSolution(node) {
  if (!node) return null;
  
  const visited = new Map();
  
  function dfs(node) {
    if (visited.has(node)) {
      return visited.get(node);
    }
    
    const clone = new GraphNode(node.val);
    visited.set(node, clone);
    
    for (const neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    
    return clone;
  }
  
  return dfs(node);
}

// Time: O(V + E), Space: O(V)

// ============================================
// EXERCISE 3: Network Delay Time
// ============================================

/**
 * Problem: Find minimum time for signal to reach all nodes
 * Given: network of n nodes, times[i] = [u, v, w] (edge from u to v with time w)
 * 
 * Example:
 * times = [[2,1,1], [2,3,1], [3,4,1]]
 * n = 4, k = 2
 * Output: 2 (2->1 and 2->3->4)
 * 
 * Web Dev Use Case: CDN routing, request latency, distributed systems
 */

// YOUR SOLUTION HERE:
function networkDelayTime(times, n, k) {
  // Implement Dijkstra's algorithm
}

// ============================================
// SOLUTION: Network Delay Time (Dijkstra)
// ============================================

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx][0] >= this.heap[parentIdx][0]) break;
      [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
      idx = parentIdx;
    }
  }

  bubbleDown(idx) {
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      
      if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === idx) break;
      
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function networkDelayTimeSolution(times, n, k) {
  // Build adjacency list
  const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  
  for (const [u, v, w] of times) {
    graph.get(u).push([v, w]);
  }
  
  // Dijkstra's algorithm
  const distances = new Array(n + 1).fill(Infinity);
  distances[k] = 0;
  
  const minHeap = new MinHeap();
  minHeap.push([0, k]); // [distance, node]
  
  while (!minHeap.isEmpty()) {
    const [currentDist, node] = minHeap.pop();
    
    if (currentDist > distances[node]) continue;
    
    for (const [neighbor, weight] of graph.get(node)) {
      const newDist = currentDist + weight;
      
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        minHeap.push([newDist, neighbor]);
      }
    }
  }
  
  // Find maximum distance
  let maxDist = 0;
  for (let i = 1; i <= n; i++) {
    if (distances[i] === Infinity) return -1;
    maxDist = Math.max(maxDist, distances[i]);
  }
  
  return maxDist;
}

// Time: O((V + E) log V) with min heap, Space: O(V + E)

// ============================================
// REAL-WORLD WEB DEV EXAMPLE
// ============================================

/**
 * Social Network Friend Recommendations
 * Find mutual friends and suggest connections
 */

class SocialNetwork {
  constructor() {
    this.graph = new Map();
  }

  addUser(userId) {
    if (!this.graph.has(userId)) {
      this.graph.set(userId, new Set());
    }
  }

  addFriendship(user1, user2) {
    this.addUser(user1);
    this.addUser(user2);
    this.graph.get(user1).add(user2);
    this.graph.get(user2).add(user1);
  }

  // Find mutual friends
  getMutualFriends(user1, user2) {
    const friends1 = this.graph.get(user1) || new Set();
    const friends2 = this.graph.get(user2) || new Set();
    
    const mutual = [];
    for (const friend of friends1) {
      if (friends2.has(friend)) {
        mutual.push(friend);
      }
    }
    
    return mutual;
  }

  // Suggest friends (friends of friends, not already friends)
  suggestFriends(userId, limit = 5) {
    const user = this.graph.get(userId);
    if (!user) return [];
    
    const suggestions = new Map(); // userId -> mutual friend count
    
    // Check friends of friends
    for (const friendId of user) {
      const friendsOfFriend = this.graph.get(friendId);
      
      for (const candidate of friendsOfFriend) {
        // Skip self and existing friends
        if (candidate === userId || user.has(candidate)) continue;
        
        suggestions.set(
          candidate,
          (suggestions.get(candidate) || 0) + 1
        );
      }
    }
    
    // Sort by mutual friend count
    return Array.from(suggestions.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([userId, mutualCount]) => ({ userId, mutualCount }));
  }

  // Find shortest connection path between users
  findConnectionPath(startUser, endUser) {
    if (startUser === endUser) return [startUser];
    
    const queue = [[startUser]];
    const visited = new Set([startUser]);
    
    while (queue.length > 0) {
      const path = queue.shift();
      const currentUser = path[path.length - 1];
      
      const friends = this.graph.get(currentUser) || new Set();
      
      for (const friend of friends) {
        if (friend === endUser) {
          return [...path, friend];
        }
        
        if (!visited.has(friend)) {
          visited.add(friend);
          queue.push([...path, friend]);
        }
      }
    }
    
    return null; // No connection
  }

  // Calculate degree of separation
  getDegreeOfSeparation(user1, user2) {
    const path = this.findConnectionPath(user1, user2);
    return path ? path.length - 1 : -1;
  }
}

// ============================================
// PACKAGE DEPENDENCY RESOLVER
// ============================================

/**
 * Real NPM-like dependency resolution
 */

class PackageManager {
  constructor() {
    this.packages = new Map(); // package -> dependencies[]
  }

  addPackage(packageName, dependencies = []) {
    this.packages.set(packageName, dependencies);
  }

  // Get installation order (topological sort)
  getInstallOrder(packageName) {
    const visited = new Set();
    const result = [];
    const visiting = new Set(); // For cycle detection
    
    const dfs = (pkg) => {
      if (visiting.has(pkg)) {
        throw new Error(`Circular dependency detected: ${pkg}`);
      }
      
      if (visited.has(pkg)) return;
      
      visiting.add(pkg);
      
      const deps = this.packages.get(pkg) || [];
      for (const dep of deps) {
        if (!this.packages.has(dep)) {
          throw new Error(`Package not found: ${dep}`);
        }
        dfs(dep);
      }
      
      visiting.delete(pkg);
      visited.add(pkg);
      result.push(pkg);
    };
    
    dfs(packageName);
    return result;
  }

  // Find all packages that depend on a package
  findDependents(packageName) {
    const dependents = [];
    
    for (const [pkg, deps] of this.packages.entries()) {
      if (deps.includes(packageName)) {
        dependents.push(pkg);
      }
    }
    
    return dependents;
  }

  // Check if removing a package is safe
  canRemoveSafely(packageName, except = []) {
    const dependents = this.findDependents(packageName);
    const unsafeDependents = dependents.filter(dep => !except.includes(dep));
    
    return {
      safe: unsafeDependents.length === 0,
      blockedBy: unsafeDependents
    };
  }
}

// ============================================
// TESTS
// ============================================

console.log('\n=== Testing Course Schedule ===');
console.log('Can finish [1,0], [2,1], [3,2]:', canFinishSolution(4, [[1,0], [2,1], [3,2]])); // true
console.log('Can finish [1,0], [0,1]:', canFinishSolution(2, [[1,0], [0,1]])); // false

console.log('\n=== Testing Network Delay ===');
console.log('Network delay:', networkDelayTimeSolution([[2,1,1], [2,3,1], [3,4,1]], 4, 2)); // 2

console.log('\n=== Testing Social Network ===');
const social = new SocialNetwork();
social.addFriendship('Alice', 'Bob');
social.addFriendship('Alice', 'Charlie');
social.addFriendship('Bob', 'David');
social.addFriendship('Charlie', 'David');
console.log('Mutual friends (Bob, Charlie):', social.getMutualFriends('Bob', 'Charlie')); // ['Alice', 'David']
console.log('Friend suggestions for Alice:', social.suggestFriends('Alice')); // [{ userId: 'David', mutualCount: 2 }]
console.log('Connection path Alice->David:', social.findConnectionPath('Alice', 'David')); // ['Alice', 'Bob', 'David']
console.log('Degrees of separation:', social.getDegreeOfSeparation('Alice', 'David')); // 2

console.log('\n=== Testing Package Manager ===');
const pm = new PackageManager();
pm.addPackage('react', []);
pm.addPackage('react-dom', ['react']);
pm.addPackage('next', ['react', 'react-dom']);
pm.addPackage('my-app', ['next', 'axios']);
pm.addPackage('axios', []);

try {
  console.log('Install order for my-app:', pm.getInstallOrder('my-app'));
  // ['react', 'react-dom', 'next', 'axios', 'my-app']
  
  console.log('Can remove react safely?', pm.canRemoveSafely('react'));
  // { safe: false, blockedBy: ['react-dom'] }
  
  console.log('Can remove axios safely?', pm.canRemoveSafely('axios'));
  // { safe: false, blockedBy: ['my-app'] }
} catch (error) {
  console.error(error.message);
}

module.exports = {
  canFinishSolution,
  cloneGraphSolution,
  networkDelayTimeSolution,
  SocialNetwork,
  PackageManager
};
