// do insertion sort

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const spliced = arr.splice(i, 0);
                arr.splice(j, 0, spliced[0]);
            }
        }
    }
    return arr;
}

console.log(insertionSort([7, 12, 5, 6, 7, 9, 0]))
