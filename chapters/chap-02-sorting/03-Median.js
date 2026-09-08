// Q at Reddit > u have two sorted array and , i want to find median for both
//find  median value >
const findMedian = (list) => {
    // first we sort array
    const sorted = list.sort((a, b) => a - b);
    // second we need to detect either is  even or odd
    console.log(sorted);
    // Even
    let median;
    if (sorted.length % 2 === 0) {
        // calculate the median for even array
        median = (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2
    } else {
        median = sorted[Math.floor(sorted.length / 2)];
    }
    // third we will make the middle do operation and get the average of two element if is even
    return "median  is :" + median
}
// 8
console.log(findMedian([2, 52, 4, 8, 6, 9]));
