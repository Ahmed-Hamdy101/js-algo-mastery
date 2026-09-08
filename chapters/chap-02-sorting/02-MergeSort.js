const stitch = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }

    }
    console.log("result :" + result);
    return result.concat(left, right);
}

//
const MergeSort = (nums) => {
    const l = nums.length;
    if (l < 2) {
        return nums;
    }
    console.log("nums :" + nums)
    const Mid = Math.floor(l / 2);
    console.log("MID:" + Mid)
    const left = nums.slice(0, Mid);
    console.log("left:" + left)
    const right = nums.slice(Mid, l);
    console.log("right:" + right)
    const sortedLeft = MergeSort(left);
    console.log("ٍsortedLeft Recur => :" + sortedLeft)
    const sortedRight = MergeSort(right);
    console.log("ٍsortedRight Recur => :" + sortedRight)
    return stitch(sortedLeft, sortedRight);
}

console.log(MergeSort([3, 4, 7, 2]))
