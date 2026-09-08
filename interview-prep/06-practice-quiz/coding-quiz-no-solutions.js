/**
 * PRACTICE QUIZ - NO SOLUTIONS PROVIDED
 * 
 * This quiz contains problems for you to solve.
 * Only hints and tips are provided - NO ANSWERS!
 * 
 * Instructions:
 * 1. Try to solve each problem before looking at hints
 * 2. Write your solution in code
 * 3. Test your solution with the provided test cases
 * 4. Review the hints if you're stuck
 * 5. Compare time/space complexity with the hints
 * 
 * After attempting all problems, check the solution files:
 * - 01-advanced-algorithms/exercises.js (has solutions for reference)
 */

console.log('='.repeat(60));
console.log('PRACTICE QUIZ - SOLVE THESE PROBLEMS');
console.log('NO SOLUTIONS PROVIDED - ONLY HINTS!');
console.log('='.repeat(60));

// ============================================
// PROBLEM 1: VALID PARENTHESES
// ============================================

console.log('\n📝 PROBLEM 1: Valid Parentheses');
console.log('─'.repeat(60));

/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * Valid means:
 * 1. Open brackets must be closed by the same type of brackets
 * 2. Open brackets must be closed in the correct order
 * 
 * Examples:
 * - "()" → true
 * - "()[]{}" → true
 * - "(]" → false
 * - "([)]" → false
 * - "{[]}" → true
 * 
 * HINTS:
 * 💡 What data structure is perfect for Last-In-First-Out?
 * 💡 When you see an opening bracket, what should you do?
 * 💡 When you see a closing bracket, what should you check?
 * 💡 What if the stack is empty when you see a closing bracket?
 * 
 * TIME COMPLEXITY TARGET: O(n)
 * SPACE COMPLEXITY TARGET: O(n)
 * 
 * TIPS:
 * - Use a stack to track opening brackets
 * - For each closing bracket, check if it matches the top of stack
 * - Don't forget to check if stack is empty at the end
 */

function isValidParentheses(s) {
  // YOUR CODE HERE
  // Implement the solution
}

// TEST CASES - Run these to verify your solution
console.log('\nTest Cases:');
console.log('isValidParentheses("()") →', isValidParentheses("()")); // Should be true
console.log('isValidParentheses("()[]{}") →', isValidParentheses("()[]{}")); // Should be true
console.log('isValidParentheses("(]") →', isValidParentheses("(]")); // Should be false
console.log('isValidParentheses("([)]") →', isValidParentheses("([)]")); // Should be false
console.log('isValidParentheses("{[]}") →', isValidParentheses("{[]}")); // Should be true
console.log('isValidParentheses("((") →', isValidParentheses("((")); // Should be false

// ============================================
// PROBLEM 2: TWO SUM
// ============================================

console.log('\n\n📝 PROBLEM 2: Two Sum');
console.log('─'.repeat(60));

/**
 * Given an array of integers and a target, return indices of the two numbers
 * that add up to the target.
 * 
 * You may assume that each input has exactly one solution,
 * and you may not use the same element twice.
 * 
 * Examples:
 * - [2,7,11,15], target = 9 → [0,1] (because 2 + 7 = 9)
 * - [3,2,4], target = 6 → [1,2]
 * - [3,3], target = 6 → [0,1]
 * 
 * HINTS:
 * 💡 Brute force: Try all pairs - what's the complexity?
 * 💡 Better approach: What if you store what you've seen?
 * 💡 For each number, what do you need to find? (target - current)
 * 💡 Which data structure gives O(1) lookup?
 * 
 * TIME COMPLEXITY TARGET: O(n)
 * SPACE COMPLEXITY TARGET: O(n)
 * 
 * TIPS:
 * - Use a Map to store number -> index
 * - For each number, check if (target - number) exists in map
 * - Be careful not to use the same element twice
 */

function twoSum(nums, target) {
  // YOUR CODE HERE
}

// TEST CASES
console.log('\nTest Cases:');
console.log('twoSum([2,7,11,15], 9) →', twoSum([2,7,11,15], 9)); // [0,1]
console.log('twoSum([3,2,4], 6) →', twoSum([3,2,4], 6)); // [1,2]
console.log('twoSum([3,3], 6) →', twoSum([3,3], 6)); // [0,1]

// ============================================
// PROBLEM 3: LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// ============================================

console.log('\n\n📝 PROBLEM 3: Longest Substring Without Repeating');
console.log('─'.repeat(60));

/**
 * Given a string, find the length of the longest substring
 * without repeating characters.
 * 
 * Examples:
 * - "abcabcbb" → 3 (substring "abc")
 * - "bbbbb" → 1 (substring "b")
 * - "pwwkew" → 3 (substring "wke")
 * - "dvdf" → 3 (substring "vdf")
 * 
 * HINTS:
 * 💡 This is a classic sliding window problem
 * 💡 Use two pointers: left and right
 * 💡 Expand right pointer to grow window
 * 💡 When you find duplicate, shrink from left
 * 💡 What data structure tracks characters in current window?
 * 
 * TIME COMPLEXITY TARGET: O(n)
 * SPACE COMPLEXITY TARGET: O(min(n, m)) where m is charset size
 * 
 * TIPS:
 * - Use a Set or Map to track characters in current window
 * - When you find a duplicate, remove from left until it's gone
 * - Keep track of maximum length seen
 * - Consider edge cases: empty string, single character
 */

function lengthOfLongestSubstring(s) {
  // YOUR CODE HERE
}

// TEST CASES
console.log('\nTest Cases:');
console.log('lengthOfLongestSubstring("abcabcbb") →', lengthOfLongestSubstring("abcabcbb")); // 3
console.log('lengthOfLongestSubstring("bbbbb") →', lengthOfLongestSubstring("bbbbb")); // 1
console.log('lengthOfLongestSubstring("pwwkew") →', lengthOfLongestSubstring("pwwkew")); // 3
console.log('lengthOfLongestSubstring("dvdf") →', lengthOfLongestSubstring("dvdf")); // 3
console.log('lengthOfLongestSubstring("") →', lengthOfLongestSubstring("")); // 0

// ============================================
// PROBLEM 4: TOP K FREQUENT ELEMENTS
// ============================================

console.log('\n\n📝 PROBLEM 4: Top K Frequent Elements');
console.log('─'.repeat(60));

/**
 * Given an integer array, return the k most frequent elements.
 * 
 * Examples:
 * - [1,1,1,2,2,3], k=2 → [1,2]
 * - [1], k=1 → [1]
 * - [1,2,2,3,3,3], k=2 → [3,2]
 * 
 * HINTS:
 * 💡 First step: Count frequency of each element
 * 💡 Then what? Need to find k elements with highest frequency
 * 💡 Approach 1: Sort by frequency - what's the complexity?
 * 💡 Approach 2: Use a heap - what's the complexity?
 * 💡 Approach 3: Bucket sort by frequency - what's the complexity?
 * 
 * TIME COMPLEXITY TARGET: O(n log k) with heap, O(n) with bucket sort
 * SPACE COMPLEXITY TARGET: O(n)
 * 
 * TIPS:
 * - Use Map to count frequencies
 * - Method 1: Sort entries by frequency (simple but O(n log n))
 * - Method 2: Use min heap of size k (O(n log k))
 * - Method 3: Bucket sort - group by frequency (O(n) but more complex)
 * - Which method would you choose in an interview? Discuss trade-offs!
 */

function topKFrequent(nums, k) {
  // YOUR CODE HERE
}

// TEST CASES
console.log('\nTest Cases:');
console.log('topKFrequent([1,1,1,2,2,3], 2) →', topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log('topKFrequent([1], 1) →', topKFrequent([1], 1)); // [1]
console.log('topKFrequent([1,2,2,3,3,3], 2) →', topKFrequent([1,2,2,3,3,3], 2)); // [3,2]

// ============================================
// PROBLEM 5: DESIGN BROWSER HISTORY
// ============================================

console.log('\n\n📝 PROBLEM 5: Design Browser History');
console.log('─'.repeat(60));

/**
 * Design a browser history system that supports:
 * - visit(url): Visit a url
 * - back(steps): Move back in history by steps
 * - forward(steps): Move forward in history by steps
 * 
 * Example:
 * history.visit("google.com")
 * history.visit("facebook.com")
 * history.visit("youtube.com")
 * history.back(1) → returns "facebook.com"
 * history.back(1) → returns "google.com"
 * history.forward(1) → returns "facebook.com"
 * history.visit("linkedin.com") → clears forward history
 * history.forward(1) → returns "linkedin.com" (no forward history)
 * history.back(2) → returns "google.com"
 * 
 * HINTS:
 * 💡 What data structure maintains order and allows back/forward?
 * 💡 You need to track current position in history
 * 💡 When visiting new URL, what happens to forward history?
 * 💡 Consider using an array or linked list
 * 💡 Think about how real browsers implement this
 * 
 * TIME COMPLEXITY TARGET: O(1) for all operations
 * SPACE COMPLEXITY TARGET: O(n) where n is number of URLs
 * 
 * TIPS:
 * - Use an array to store history
 * - Keep a pointer to current position
 * - When visiting new URL, truncate array at current position
 * - Handle edge cases: back beyond start, forward beyond end
 */

class BrowserHistory {
  constructor(homepage) {
    // YOUR CODE HERE
  }

  visit(url) {
    // YOUR CODE HERE
  }

  back(steps) {
    // YOUR CODE HERE
  }

  forward(steps) {
    // YOUR CODE HERE
  }
}

// TEST CASES
console.log('\nTest Cases:');
const history = new BrowserHistory("google.com");
history.visit("facebook.com");
history.visit("youtube.com");
console.log('back(1):', history.back(1)); // facebook.com
console.log('back(1):', history.back(1)); // google.com
console.log('forward(1):', history.forward(1)); // facebook.com
history.visit("linkedin.com");
console.log('forward(1):', history.forward(1)); // linkedin.com
console.log('back(2):', history.back(2)); // google.com

// ============================================
// SUMMARY & NEXT STEPS
// ============================================

console.log('\n' + '='.repeat(60));
console.log('QUIZ COMPLETE!');
console.log('='.repeat(60));

console.log(`
📚 NEXT STEPS:

1. Review Your Solutions
   - Did you get the correct output for all test cases?
   - Is your time complexity optimal?
   - Is your code clean and readable?

2. Compare with Reference Solutions
   - Check: 01-advanced-algorithms/exercises.js
   - Check: 02-graph-algorithms/graph-exercises.js
   - See different approaches and optimizations

3. Understand the Patterns
   - Stack: Valid Parentheses
   - Hash Map: Two Sum
   - Sliding Window: Longest Substring
   - Hash Map + Sort: Top K Frequent
   - Array + Pointer: Browser History

4. Practice More
   - If you solved < 3: Review fundamentals
   - If you solved 3-4: Keep practicing similar problems
   - If you solved 5: You're ready for more advanced problems!

5. Time Yourself
   - In real interviews, you have 30-45 minutes per problem
   - Practice under time pressure
   - Explain your thinking out loud

📊 DIFFICULTY BREAKDOWN:
   Easy: Parentheses, Two Sum
   Medium: Longest Substring, Top K Frequent, Browser History

💡 INTERVIEW TIPS:
   - Always clarify requirements first
   - Start with brute force, then optimize
   - Discuss time/space complexity
   - Test with edge cases
   - Write clean, readable code
   - Explain your thought process

Good luck! 🚀
`);

module.exports = {
  // No exports - this is a practice file
};
