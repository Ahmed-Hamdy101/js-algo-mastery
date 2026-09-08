/**
 * ═══════════════════════════════════════════════════════════════════
 * COMPREHENSIVE QUIZ - CHAPTERS 1-9
 * ═══════════════════════════════════════════════════════════════════
 * 
 * This quiz covers everything you studied from chapters/chap-01-fundamentals to chapters/chap-09-linked-list:
 * - Chapter 1: Big O, Searching, Recursion, Fibonacci, Bubble Sort
 * - Chapter 2: Insertion Sort, Merge Sort
 * - Chapter 3: Quick Sort
 * - Chapter 4: Set
 * - Chapter 5: Map
 * - Chapter 6: Stack
 * - Chapter 7: Queue
 * - Chapter 8: ArrayList
 * - Chapter 9: LinkedList
 * 
 * Instructions:
 * 1. Write your answer in the designated space
 * 2. Run the file to check your answers
 * 3. Review explanations for wrong answers
 * 4. Track your score to measure progress
 */

class ComprehensiveQuiz {
  constructor() {
    this.score = 0;
    this.totalQuestions = 0;
    this.answers = [];
  }

  ask(questionNum, chapter, yourAnswer, correctAnswer, explanation) {
    this.totalQuestions++;
    const correct = yourAnswer === correctAnswer;
    
    const result = {
      question: questionNum,
      chapter: chapter,
      yourAnswer: yourAnswer,
      correctAnswer: correctAnswer,
      correct: correct
    };
    
    this.answers.push(result);
    
    if (correct) {
      this.score++;
      console.log(`✅ Q${questionNum} CORRECT!`);
    } else {
      console.log(`❌ Q${questionNum} WRONG`);
      console.log(`   Your answer: ${yourAnswer}`);
      console.log(`   Correct answer: ${correctAnswer}`);
    }
    console.log(`   💡 ${explanation}\n`);
    
    return correct;
  }

  showResults() {
    const percentage = (this.score / this.totalQuestions * 100).toFixed(1);
    
    console.log('\n' + '═'.repeat(60));
    console.log('                    FINAL RESULTS');
    console.log('═'.repeat(60));
    console.log(`\n📊 Score: ${this.score}/${this.totalQuestions} (${percentage}%)\n`);
    
    // Performance assessment
    if (percentage >= 90) {
      console.log('🏆 EXCELLENT! You mastered the material!');
      console.log('   You\'re ready for advanced topics.');
    } else if (percentage >= 80) {
      console.log('🎯 GREAT JOB! Strong understanding!');
      console.log('   Minor review needed on weak areas.');
    } else if (percentage >= 70) {
      console.log('👍 GOOD! Solid foundation!');
      console.log('   Review chapters where you missed questions.');
    } else if (percentage >= 60) {
      console.log('📚 PASSING! But more practice needed.');
      console.log('   Focus on concepts you missed.');
    } else {
      console.log('💪 KEEP STUDYING! Review all chapters.');
      console.log('   Practice implementations again.');
    }
    
    // Chapter breakdown
    console.log('\n📖 Performance by Chapter:');
    const byChapter = {};
    this.answers.forEach(a => {
      if (!byChapter[a.chapter]) {
        byChapter[a.chapter] = { correct: 0, total: 0 };
      }
      byChapter[a.chapter].total++;
      if (a.correct) byChapter[a.chapter].correct++;
    });
    
    Object.keys(byChapter).sort().forEach(chapter => {
      const stats = byChapter[chapter];
      const chapterPercent = (stats.correct / stats.total * 100).toFixed(0);
      const status = chapterPercent >= 70 ? '✅' : '⚠️';
      console.log(`   ${status} Chapter ${chapter}: ${stats.correct}/${stats.total} (${chapterPercent}%)`);
    });
    
    // Study recommendations
    console.log('\n📝 Study Recommendations:');
    Object.keys(byChapter).forEach(chapter => {
      const stats = byChapter[chapter];
      const chapterPercent = (stats.correct / stats.total * 100);
      if (chapterPercent < 70) {
        console.log(`   🔴 Review Chapter ${chapter} - Need improvement`);
      }
    });
    
    console.log('\n' + '═'.repeat(60) + '\n');
  }
}

const quiz = new ComprehensiveQuiz();

console.log('\n' + '═'.repeat(60));
console.log('     COMPREHENSIVE QUIZ: CHAPTERS 1-9');
console.log('═'.repeat(60));
console.log('\nAnswer each question by changing the value in quiz.ask()');
console.log('Options are: "a", "b", "c", or "d"\n');

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 1: BIG O & ALGORITHMS BASICS
// ═══════════════════════════════════════════════════════════════════

console.log('\n📘 CHAPTER 1: Big O, Searching, Recursion\n');

// Question 1
console.log('Q1: What is the time complexity of this code?');
console.log(`
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
`);
console.log('a) O(1)   b) O(n)   c) O(n²)   d) O(log n)');
quiz.ask(
  1, 
  'Chapter 1',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'O(n) - Single loop iterates n times. Each iteration is O(1), total is O(n).'
);

// Question 2
console.log('Q2: What is the time complexity of this code?');
console.log(`
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
`);
console.log('a) O(n)   b) O(n²)   c) O(2n)   d) O(log n)');
quiz.ask(
  2,
  'Chapter 1',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'O(n²) - Nested loops: outer loop n times × inner loop n times = n × n = n².'
);

// Question 3
console.log('Q3: What does recursion require to work properly?');
console.log('a) Loops   b) Base case   c) Arrays   d) Classes');
quiz.ask(
  3,
  'Chapter 1',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Base case - Recursion must have a condition to stop, otherwise infinite recursion!'
);

// Question 4
console.log('Q4: In your crossAdd function, what is the time complexity?');
console.log('a) O(1)   b) O(n)   c) O(n²)   d) O(log n)');
quiz.ask(
  4,
  'Chapter 1',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'O(n) - Single loop through the input array, accessing first and last elements.'
);

// Question 5
console.log('Q5: What is the time complexity of searching for an item in an unsorted array?');
console.log('a) O(1)   b) O(log n)   c) O(n)   d) O(n²)');
quiz.ask(
  5,
  'Chapter 1',
  'c', // <-- YOUR ANSWER HERE
  'c',
  'O(n) - Linear search: must check each element until found or reach end.'
);

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 2 & 3: SORTING ALGORITHMS
// ═══════════════════════════════════════════════════════════════════

console.log('\n📗 CHAPTERS 2-3: Sorting Algorithms\n');

// Question 6
console.log('Q6: What is the time complexity of Bubble Sort?');
console.log('a) O(n)   b) O(n log n)   c) O(n²)   d) O(log n)');
quiz.ask(
  6,
  'Chapter 1',
  'c', // <-- YOUR ANSWER HERE
  'c',
  'O(n²) - Nested loops comparing and swapping adjacent elements.'
);

// Question 7
console.log('Q7: What is the time complexity of Merge Sort?');
console.log('a) O(n)   b) O(n log n)   c) O(n²)   d) O(2ⁿ)');
quiz.ask(
  7,
  'Chapter 2',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'O(n log n) - Divide array (log n levels) and merge each level (n work per level).'
);

// Question 8
console.log('Q8: What is the average time complexity of Quick Sort?');
console.log('a) O(n)   b) O(n log n)   c) O(n²)   d) O(log n)');
quiz.ask(
  8,
  'Chapter 3',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'O(n log n) average - Partition (n) at each level (log n levels on average).'
);

// Question 9
console.log('Q9: Which sorting algorithm is most efficient for nearly sorted data?');
console.log('a) Bubble Sort   b) Insertion Sort   c) Merge Sort   d) Quick Sort');
quiz.ask(
  9,
  'Chapter 2',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Insertion Sort - Can achieve O(n) on nearly sorted data by making few swaps.'
);

// Question 10
console.log('Q10: In Quick Sort, what is the pivot?');
console.log('a) First element   b) Middle element   c) Element used for partitioning   d) Smallest element');
quiz.ask(
  10,
  'Chapter 3',
  'c', // <-- YOUR ANSWER HERE
  'c',
  'Element used for partitioning - Divides array into smaller and larger elements.'
);

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 4 & 5: SET AND MAP
// ═══════════════════════════════════════════════════════════════════

console.log('\n📙 CHAPTERS 4-5: Set and Map\n');

// Question 11
console.log('Q11: What is the main property of a Set?');
console.log('a) Ordered   b) No duplicates   c) Key-value pairs   d) Index-based');
quiz.ask(
  11,
  'Chapter 4',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'No duplicates - Set automatically removes duplicate values.'
);

// Question 12
console.log('Q12: What is the time complexity of Set.has()?');
console.log('a) O(1)   b) O(n)   c) O(log n)   d) O(n²)');
quiz.ask(
  12,
  'Chapter 4',
  'a', // <-- YOUR ANSWER HERE
  'a',
  'O(1) - Set uses hash table internally for constant time lookup.'
);

// Question 13
console.log('Q13: What does Map store?');
console.log('a) Only numbers   b) Only strings   c) Key-value pairs   d) Only arrays');
quiz.ask(
  13,
  'Chapter 5',
  'c', // <-- YOUR ANSWER HERE
  'c',
  'Key-value pairs - Map stores associations between keys and values.'
);

// Question 14
console.log('Q14: What is the time complexity of Map.get()?');
console.log('a) O(1)   b) O(n)   c) O(log n)   d) O(n²)');
quiz.ask(
  14,
  'Chapter 5',
  'a', // <-- YOUR ANSWER HERE
  'a',
  'O(1) - Map uses hash table for constant time key lookup.'
);

// Question 15
console.log('Q15: What is the result of Set union operation?');
console.log('a) Common elements   b) All unique elements from both sets   c) Difference   d) Intersection');
quiz.ask(
  15,
  'Chapter 4',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'All unique elements from both sets - Union combines all elements without duplicates.'
);

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 6 & 7: STACK AND QUEUE
// ═══════════════════════════════════════════════════════════════════

console.log('\n📕 CHAPTERS 6-7: Stack and Queue\n');

// Question 16
console.log('Q16: What principle does Stack follow?');
console.log('a) FIFO   b) LIFO   c) Random access   d) Priority-based');
quiz.ask(
  16,
  'Chapter 6',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'LIFO (Last In First Out) - Last element pushed is first to be popped.'
);

// Question 17
console.log('Q17: What principle does Queue follow?');
console.log('a) FIFO   b) LIFO   c) Random access   d) Priority-based');
quiz.ask(
  17,
  'Chapter 7',
  'a', // <-- YOUR ANSWER HERE
  'a',
  'FIFO (First In First Out) - First element enqueued is first to be dequeued.'
);

// Question 18
console.log('Q18: What is the time complexity of Stack.push()?');
console.log('a) O(1)   b) O(n)   c) O(log n)   d) O(n²)');
quiz.ask(
  18,
  'Chapter 6',
  'a', // <-- YOUR ANSWER HERE
  'a',
  'O(1) - Push adds element to end of array in constant time.'
);

// Question 19
console.log('Q19: What operation removes element from front of Queue?');
console.log('a) push()   b) pop()   c) enqueue()   d) dequeue()');
quiz.ask(
  19,
  'Chapter 7',
  'd', // <-- YOUR ANSWER HERE
  'd',
  'dequeue() - Removes and returns the front element of the queue.'
);

// Question 20
console.log('Q20: Which is a real-world example of Stack?');
console.log('a) Printer queue   b) Browser back button   c) Waiting line   d) Playlist');
quiz.ask(
  20,
  'Chapter 6',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Browser back button - Last visited page is first to go back to (LIFO).'
);

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 8 & 9: ARRAYLIST AND LINKEDLIST
// ═══════════════════════════════════════════════════════════════════

console.log('\n📓 CHAPTERS 8-9: ArrayList and LinkedList\n');

// Question 21
console.log('Q21: What is the time complexity of ArrayList.get(index)?');
console.log('a) O(1)   b) O(n)   c) O(log n)   d) O(n²)');
quiz.ask(
  21,
  'Chapter 8',
  'a', // <-- YOUR ANSWER HERE
  'a',
  'O(1) - Direct access to index in array is constant time.'
);

// Question 22
console.log('Q22: What happens when ArrayList reaches capacity?');
console.log('a) Error thrown   b) Capacity doubles   c) Stays same   d) Capacity halves');
quiz.ask(
  22,
  'Chapter 8',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Capacity doubles - Dynamic array doubles its size when full.'
);

// Question 23
console.log('Q23: What is the time complexity of LinkedList.get(index)?');
console.log('a) O(1)   b) O(n)   c) O(log n)   d) O(n²)');
quiz.ask(
  23,
  'Chapter 9',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'O(n) - Must traverse from head to reach index (no random access).'
);

// Question 24
console.log('Q24: What does each node in LinkedList contain?');
console.log('a) Only value   b) Value and next pointer   c) Only pointer   d) Index and value');
quiz.ask(
  24,
  'Chapter 9',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Value and next pointer - Each node stores data and reference to next node.'
);

// Question 25
console.log('Q25: When is LinkedList better than ArrayList?');
console.log('a) Random access   b) Frequent insertions at beginning   c) Less memory   d) Sorting');
quiz.ask(
  25,
  'Chapter 9',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Frequent insertions at beginning - LinkedList insert at head is O(1), ArrayList is O(n).'
);

// ═══════════════════════════════════════════════════════════════════
// MIXED CONCEPTS - APPLYING WHAT YOU LEARNED
// ═══════════════════════════════════════════════════════════════════

console.log('\n🎯 MIXED CONCEPTS: Apply Your Knowledge\n');

// Question 26
console.log('Q26: To find if array contains duplicates, which data structure is best?');
console.log('a) Array   b) LinkedList   c) Set   d) Stack');
quiz.ask(
  26,
  'Mixed',
  'c', // <-- YOUR ANSWER HERE
  'c',
  'Set - Add elements to Set; if size < array length, duplicates exist. O(n) time.'
);

// Question 27
console.log('Q27: To implement undo/redo functionality, what should you use?');
console.log('a) Queue   b) Two Stacks   c) Array   d) Map');
quiz.ask(
  27,
  'Mixed',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Two Stacks - One for undo history, one for redo history (LIFO for both).'
);

// Question 28
console.log('Q28: Which algorithm would you use to sort a small nearly-sorted array?');
console.log('a) Merge Sort   b) Quick Sort   c) Insertion Sort   d) Bubble Sort');
quiz.ask(
  28,
  'Mixed',
  'c', // <-- YOUR ANSWER HERE
  'c',
  'Insertion Sort - O(n) on nearly sorted data, simple and efficient for small arrays.'
);

// Question 29
console.log('Q29: To check if string has matching parentheses, what data structure?');
console.log('a) Queue   b) Stack   c) Set   d) Map');
quiz.ask(
  29,
  'Mixed',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Stack - Push opening brackets, pop and match with closing brackets (LIFO).'
);

// Question 30
console.log('Q30: To process requests in order received, what data structure?');
console.log('a) Stack   b) Queue   c) Set   d) LinkedList');
quiz.ask(
  30,
  'Mixed',
  'b', // <-- YOUR ANSWER HERE
  'b',
  'Queue - FIFO ensures first request received is first processed.'
);

// ═══════════════════════════════════════════════════════════════════
// SHOW FINAL RESULTS
// ═══════════════════════════════════════════════════════════════════

quiz.showResults();

// ═══════════════════════════════════════════════════════════════════
// STUDY GUIDE BASED ON YOUR RESULTS
// ═══════════════════════════════════════════════════════════════════

console.log('📚 STUDY GUIDE:\n');
console.log('Based on the chapters you need to review:\n');
console.log('Chapter 1 (Big O, Recursion):');
console.log('  - Review: chapters/chap-01-fundamentals/01-big-o.js, 03-recursion.js');
console.log('  - Practice: Analyze time complexity of your own code\n');

console.log('Chapters 2-3 (Sorting):');
console.log('  - Review: chapters/chap-02-sorting/02-MergeSort.js, chapters/chap-03-divide-conquer/01-quick-sort.js');
console.log('  - Practice: Implement sorts from memory\n');

console.log('Chapters 4-5 (Set, Map):');
console.log('  - Review: chapters/chap-04-sets/01-set.js, chapters/chap-05-maps/map.js');
console.log('  - Practice: Use Set/Map to solve duplicate problems\n');

console.log('Chapters 6-7 (Stack, Queue):');
console.log('  - Review: chapters/chap-06-stacks/stack.js, chapters/chap-07-queues/queue.js');
console.log('  - Practice: Implement matching parentheses with Stack\n');

console.log('Chapters 8-9 (ArrayList, LinkedList):');
console.log('  - Review: chapters/chap-08-array-list/ArrayList.js, chapters/chap-09-linked-list/LinkedList.js');
console.log('  - Practice: Compare performance of both\n');

console.log('═'.repeat(60));
console.log('💡 TIP: Review chapters where you scored < 70%');
console.log('🎯 GOAL: Retake quiz until you score 90%+');
console.log('📝 NEXT: After mastering basics, move to interview-prep/');
console.log('═'.repeat(60) + '\n');

module.exports = ComprehensiveQuiz;
