/**
 * Chapter 01 - Fundamentals
 * This example shows a linear scan pattern: each element is processed once.
 * The function pairs the first value with the last value and sums them.
 * Time complexity: O(n), because the loop runs once per item.
 */

// [1,2,3]

//  [4,4,4]

// do big O / find it
const crossAdd = async (inputs)=>{
    // define array will print the sum of one by one[]
    const answer = []
    for (let i = 0; i <inputs.length ; i++) {
        // one from the first loop she is move
        let firstKey = inputs[i];
        // second from the last loop she is back
        let lastKey = inputs[inputs.length - 1 - i ];
        // last thing we add them together
        answer.push(firstKey + lastKey);
    }
    // return answer
    return answer;
}
// [4,4,4]
console.log(crossAdd([1,2,3]));

