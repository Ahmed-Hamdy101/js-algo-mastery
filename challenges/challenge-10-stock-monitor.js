/**
 * 🔥 CHALLENGE 10: Stock Price Monitor
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: Queue + ArrayList + Median
 * Based on: Chapter 2, 7, 8
 * 
 * ============================================================================
 * Build Bloomberg Terminal! Monitor real-time prices, detect spikes!
 * ============================================================================
 */

class StockMonitor {
    constructor(symbol, windowSize = 20) {
        this.symbol = symbol;
        this.priceQueue = [];
        this.priceHistory = [];
        this.windowSize = windowSize;
    }

    addPrice(price, timestamp = Date.now()) {
        // YOUR CODE HERE
    }

    getMovingAverage() {
        // YOUR CODE HERE
    }

    detectSpike(threshold = 5) {
        // YOUR CODE HERE
    }

    calculateMedian() {
        // YOUR CODE HERE - Use median from Chapter 2
    }

    getTopGainers(stocks, count = 5) {
        // YOUR CODE HERE
    }
}

// TEST
const stock = new StockMonitor("AAPL", 5);
[150, 152, 151, 155, 153].forEach(p => stock.addPrice(p));
console.log("Calculate moving average!");
