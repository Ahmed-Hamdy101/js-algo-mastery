/**
 * 🔥 CHALLENGE 08: Drawing App Undo/Redo
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: Stack + ArrayList for State Management
 * Based on: Chapter 6, 8
 * 
 * ============================================================================
 * Build Figma/Canva-style undo/redo for drawing app!
 * Store drawing states efficiently. Limit to 50 undo steps.
 * ============================================================================
 */

class DrawingState {
    constructor(shapes, timestamp) {
        this.shapes = [...shapes]; // Deep copy
        this.timestamp = timestamp;
    }
}

class DrawingApp {
    constructor(maxUndoSteps = 50) {
        this.undoStack = [];
        this.redoStack = [];
        this.currentShapes = [];
        this.maxUndoSteps = maxUndoSteps;
    }

    addShape(shape) {
        // YOUR CODE HERE
        // Add shape, save state, clear redo
    }

    undo() {
        // YOUR CODE HERE
    }

    redo() {
        // YOUR CODE HERE
    }

    saveState() {
        // YOUR CODE HERE
        // Save current state to undo stack
        // Respect maxUndoSteps limit
    }

    clearCanvas() {
        // YOUR CODE HERE
    }

    deleteShape(index) {
        // YOUR CODE HERE
    }

    getShapes() {
        return this.currentShapes;
    }

    getMemoryUsage() {
        // YOUR CODE HERE
        // Calculate memory used by undo/redo stacks
    }
}

// TEST
const app = new DrawingApp(5);
app.addShape({ type: 'circle', x: 10, y: 10, r: 5 });
app.addShape({ type: 'rect', x: 20, y: 20, w: 10, h: 10 });
app.addShape({ type: 'line', x1: 0, y1: 0, x2: 50, y2: 50 });

console.log("Shapes:", app.getShapes().length);
app.undo();
console.log("After undo:", app.getShapes().length);
app.redo();
console.log("After redo:", app.getShapes().length);
console.log("Implement full functionality!");
