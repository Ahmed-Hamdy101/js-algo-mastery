/**
 * Chapter 04 - Sets
 * A set stores unique values with no duplicates.
 * This example uses an array as the internal storage and implements common set operations.
 */

// implement sets using arrays
class MySet {
    constructor() {
        this.items = [];
    }

    add(element) {
        if (!this.has(element)) {
            this.items.push(element);
            return true;
        }
        return false;
    }

    delete(element) {
        const index = this.items.indexOf(element);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    has(element) {
        return this.items.indexOf(element) !== -1;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    values() {
        return [...this.items];
    }

    // Set operations - union, intersection, difference, subset
    union(otherSet) {
        const unionSet = new MySet();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new MySet();
        this.values().forEach(value => {
            if (otherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new MySet();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        return this.values().every(value => otherSet.has(value));
    }
}
