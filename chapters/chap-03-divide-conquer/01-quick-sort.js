// pivot ?
// quick sort
const quickSort = (array) => {
    // base case
    if (array.length <= 1) {
        return array;
    }
    // recursive case : last element as pivot
    const pivot = array[array.length - 1];
    // left and right arrays
    const left = [];
    // right array
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 6]));
