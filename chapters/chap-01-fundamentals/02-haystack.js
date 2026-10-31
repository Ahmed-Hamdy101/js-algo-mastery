/**
 * Chapter 01 - Fundamentals
 * This example demonstrates a simple linear search through an array.
 * It checks every value until a match is found or the array ends.
 * Time complexity: O(n) in the worst case.
 */

// find something in array

const haystack = (search, answer) => {
    let result = answer;
    for (let i = 0; i < search.length; i++) {
        if (search[i] === answer) {
            result = answer;
            console.log('we find it ' + answer);
        } else if (i === search.length - 1 && search[i] !== answer) {
            result = search.push(answer);
        }
    }
    return result + " " + search;
}

console.log(haystack(['tom', 'trex', 'mando'], 'unkown'))
