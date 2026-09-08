/*
  Interview-style prompt
  -----------------------
  Given an array of numbers, return the maximum value.
  You must solve it without using the built-in Math.max.

  Extra challenge:
  - Explain the time complexity.
  - Can you do it in one pass?
*/

function findMax(arr) {
    let max = 0 ;
    for(let i=0; i<arr.length; i++){
        if(arr[i] >max){
            max = arr[i]
        }
    }
    return max
}

// Example tests
// console.log(findMax([3, 8, 1, 7, 2])); // expected: 8
// console.log(findMax([-3, -8, -1])); // expected: -1

/*
  Interview-style prompt
  -----------------------
  You must solve it without using the built-in Math.min.
  */
/*
    Extra challenge:
    - Explain the time complexity.
    - Can you do it in one pass?
   
    ANS:
    O(1): fastest
    O(log n): very fast
    O(n): okay
    O(n log n): common in efficient sorting
    O(n^2): slower
    O(2^n): very slow
    O(n!): very slow
*/