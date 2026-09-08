class ArrayList {
    _constructor() {
        // size of the array list
        this.size = 0;
        // capacity of the array list 4 its initially fixed to 4 and will be doubled when needed
        this.capacity = 4;
        // data storage
        this.data = {};
    }

    push(item) {
        if (this.size >= this.capacity) {
            // 🧮 Double the capacity
            const newCapacity = this.capacity * 2;

            // 🆕 Copy old data into new storage (faster with spread)
            const newData = {...this.data};

            // 🔄 Replace old with new, and update capacity
            this.data = newData;
            this.capacity = newCapacity;
        }

        // ➕ Add the new item
        this.data[this.size] = item;
        this.size++;
    }

    // Remove and return the last item
    pop() {
        if (this.size === 0) return undefined;
        return this.delete(this.size - 1);
    }

    // Return the item at the given index
    get(index) {
        if (index < 0) return "out of bounds";
        return this.data[index];
    }

    // Remove and return the item at the given index
    delete(index) {
        if (index < 0 || index >= this.size) return "out of bounds";
        const item = this.data[index];
        this._collapseTo(index);
        return item;
    }

    // Shift items to the left starting from the given index
    _collapseTo(index) {
        // Shift items to the left
        for (let i = index; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.size - 1];
        this.size--;
    }
}

// Example usage:
const list = new ArrayList();
list.push(10);
list.push(20);
list.push(30);
console.log(list.get(1)); // 20
console.log(list.pop()); // 30
console.log(list.delete(0)); // 10
