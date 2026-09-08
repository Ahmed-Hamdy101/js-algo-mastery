/**
 * 🔥 CHALLENGE 01: E-Commerce Product Sorter
 * 
 * Difficulty: 🟢 EASY
 * Concepts: Sorting Algorithms, Big O Analysis
 * Based on: Chapter 1, 2, 3
 * 
 * ============================================================================
 * SCENARIO:
 * ============================================================================
 * You're building an e-commerce admin dashboard. The client needs to sort
 * thousands of products efficiently by different criteria.
 * 
 * ============================================================================
 * REQUIREMENTS:
 * ============================================================================
 * 1. Implement a ProductSorter class with multiple sorting methods
 * 2. Sort by: price, rating, name, stock quantity
 * 3. Support ascending and descending order
 * 4. Choose the RIGHT sorting algorithm for each scenario
 * 5. Analyze and document the Big O complexity
 * 
 * ============================================================================
 * COMPLEXITY TARGETS:
 * ============================================================================
 * - sortByPrice: O(n log n) or better
 * - sortByRating: O(n log n) or better
 * - sortByName: O(n log n) or better
 * - quickSort: O(n log n) average case
 * 
 * ============================================================================
 * YOUR MISSION:
 * ============================================================================
 * Complete the ProductSorter class below. Choose appropriate algorithms!
 */

class ProductSorter {
    constructor(products) {
        this.products = products;
    }

    /**
     * Sort products by price
     * @param {boolean} ascending - true for low to high, false for high to low
     * @returns {Array} sorted products
     * 
     * TODO: Implement using QuickSort or MergeSort
     * Which is better for this scenario? Why?
     */
    sortByPrice(ascending = true) {
        // YOUR CODE HERE
        
    }

    /**
     * Sort products by rating
     * @param {boolean} ascending - true for lowest to highest
     * @returns {Array} sorted products
     * 
     * TODO: Implement using an efficient sorting algorithm
     */
    sortByRating(ascending = false) {
        // YOUR CODE HERE
        
    }

    /**
     * Sort products by name (alphabetically)
     * @param {boolean} ascending - true for A-Z
     * @returns {Array} sorted products
     * 
     * TODO: Implement string sorting
     */
    sortByName(ascending = true) {
        // YOUR CODE HERE
        
    }

    /**
     * Generic QuickSort implementation
     * @param {Array} arr - array to sort
     * @param {Function} compareFunction - custom compare function
     * @returns {Array} sorted array
     * 
     * TODO: Implement QuickSort from scratch
     * Remember: pick pivot, partition, recursive sort
     */
    quickSort(arr, compareFunction) {
        // YOUR CODE HERE
        
    }

    /**
     * Search for product by ID (Bonus: optimize this!)
     * @param {number} productId - ID to search for
     * @returns {Object|null} product or null
     * 
     * TODO: Implement efficient search
     * What's the Big O? Can you improve it?
     */
    findProductById(productId) {
        // YOUR CODE HERE
        
    }

    /**
     * Get top N products by criteria
     * @param {string} criteria - 'price', 'rating', 'stock'
     * @param {number} n - number of products
     * @returns {Array} top N products
     * 
     * TODO: Implement without sorting entire array if possible
     * Hint: Do you really need to sort everything?
     */
    getTopN(criteria, n) {
        // YOUR CODE HERE
        
    }
}

// ============================================================================
// TEST CASES - DO NOT MODIFY
// ============================================================================

const testProducts = [
    { id: 1, name: "Laptop", price: 1200, rating: 4.5, stock: 15 },
    { id: 2, name: "Mouse", price: 25, rating: 4.2, stock: 150 },
    { id: 3, name: "Keyboard", price: 75, rating: 4.8, stock: 80 },
    { id: 4, name: "Monitor", price: 300, rating: 4.6, stock: 45 },
    { id: 5, name: "Webcam", price: 80, rating: 3.9, stock: 60 },
    { id: 6, name: "Headphones", price: 150, rating: 4.7, stock: 95 },
    { id: 7, name: "USB Cable", price: 10, rating: 4.0, stock: 200 },
    { id: 8, name: "SSD Drive", price: 120, rating: 4.9, stock: 30 },
];

console.log("🧪 TEST SUITE: Product Sorter");
console.log("================================\n");

const sorter = new ProductSorter(testProducts);

// Test 1: Sort by Price (Ascending)
console.log("✅ Test 1: Sort by Price (Low to High)");
console.log("Expected order: USB Cable, Mouse, Keyboard, Webcam...");
// const sortedByPrice = sorter.sortByPrice(true);
// console.log(sortedByPrice.map(p => `${p.name}: $${p.price}`));
console.log("");

// Test 2: Sort by Rating (Descending)
console.log("✅ Test 2: Sort by Rating (High to Low)");
console.log("Expected top: SSD Drive (4.9), Keyboard (4.8)...");
// const sortedByRating = sorter.sortByRating(false);
// console.log(sortedByRating.map(p => `${p.name}: ${p.rating}⭐`));
console.log("");

// Test 3: Sort by Name
console.log("✅ Test 3: Sort by Name (A-Z)");
console.log("Expected order: Headphones, Keyboard, Laptop...");
// const sortedByName = sorter.sortByName(true);
// console.log(sortedByName.map(p => p.name));
console.log("");

// Test 4: Find Product
console.log("✅ Test 4: Find Product by ID");
// const product = sorter.findProductById(3);
// console.log(`Found: ${product ? product.name : "Not Found"}`);
console.log("");

// Test 5: Get Top 3 by Rating
console.log("✅ Test 5: Get Top 3 by Rating");
// const top3 = sorter.getTopN('rating', 3);
// console.log(top3.map(p => `${p.name}: ${p.rating}⭐`));
console.log("");

// ============================================================================
// PERFORMANCE TEST - Test with large dataset
// ============================================================================
console.log("⚡ PERFORMANCE TEST: 10,000 products");

const generateLargeDataset = (size) => {
    const products = [];
    for (let i = 0; i < size; i++) {
        products.push({
            id: i,
            name: `Product-${i}`,
            price: Math.random() * 1000,
            rating: Math.random() * 5,
            stock: Math.floor(Math.random() * 200)
        });
    }
    return products;
};

const largeDataset = generateLargeDataset(10000);
const largeSorter = new ProductSorter(largeDataset);

console.time("Sort 10k products by price");
// largeSorter.sortByPrice(true);
console.timeEnd("Sort 10k products by price");

// ============================================================================
// QUESTIONS TO ANSWER (Write in comments):
// ============================================================================
/*
 * Q1: Which sorting algorithm did you choose for sortByPrice? Why?
 * A1: 
 * 
 * Q2: What's the time complexity of your quickSort implementation?
 * A2: 
 * 
 * Q3: For getTopN(), did you sort the entire array? Is there a better way?
 * A3: 
 * 
 * Q4: How would you optimize findProductById if called repeatedly?
 * A4: 
 * 
 * Q5: What would break your sorting if products have identical values?
 * A5: 
 */

// ============================================================================
// HINTS (Only look if stuck for 30+ minutes!)
// ============================================================================
/*
 * HINT 1: QuickSort vs MergeSort - Quick is faster average case, Merge is stable
 * HINT 2: For getTopN, consider: do you need ALL items sorted?
 * HINT 3: String sorting: use localeCompare() for proper alphabetical order
 * HINT 4: For findProductById optimization, think about Map data structure
 * HINT 5: Edge cases: empty array, single item, all same values
 */

// ============================================================================
// BONUS CHALLENGES:
// ============================================================================
/*
 * 🎯 BONUS 1: Implement a custom MergeSort and compare performance
 * 🎯 BONUS 2: Add a "sort by multiple criteria" method (e.g., price then rating)
 * 🎯 BONUS 3: Implement search with autocomplete (partial name match)
 * 🎯 BONUS 4: Add caching to avoid re-sorting same data
 * 🎯 BONUS 5: Visualize the sorting process (log comparisons)
 */
