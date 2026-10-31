/**
 * Chapter 01 - Fundamentals
 * This file demonstrates recursion: a function calls itself until a base case stops it.
 * The output prints numbers from the starting value to the maximum value.
 */

let wr = (msg = '------') => console.log(`${msg}`)
const Recursion = (max, current) => {
    if (current > max) return;
    wr(current)
    Recursion(max, current + 1);
}

Recursion(5, 1);
