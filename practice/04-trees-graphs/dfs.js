/*
  Interview-style prompt
  -----------------------
  Implement depth-first search (DFS) on a graph.
  Traverse from a starting node and avoid revisiting nodes.

  Follow-up:
  - Explain the recursive strategy.
  - What is the time complexity in terms of vertices and edges?
*/

const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
};

function dfs(node, visited = new Set()) {
  // TODO: visit node and neighbors without loops
}

// Example usage
// dfs('A');
