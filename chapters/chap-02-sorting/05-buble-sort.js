// buble sort

const Bubble_Sort = (list) => {
    // inner loop is going to loop over list
    for (let i = 0; i < list.length; i++) {
        // outter loop is going to compare between 2 values
        for (let j = 0; j < list.length; j++) {
            // if the first is greater than second make swap
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

console.log(Bubble_Sort([5, 6, 7, 4]));
