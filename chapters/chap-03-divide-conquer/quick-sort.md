explain quick sort algorithm with example
// Quick sort is a divide-and-conquer algorithm that sorts an array by selecting a 'pivot' element and partitioning the
other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are
then sorted recursively.
// Here's a step-by-step explanation of how the quick sort algorithm works with an example:
// Example array: [5, 3, 8, 4, 2, 7, 1, 6]

1. **Choose a Pivot**: Select an element from the array to be the pivot. In this example, we'll choose the last element,
   which is 6.
2. **Partitioning**: Rearrange the array so that all elements less than the pivot come before it and all elements
   greater than the pivot come after it. After partitioning, the array might look like this: [5, 3, 4, 2, 1, 6, 8, 7].
   The pivot (6) is now in its final position.
3. **Recursively Apply**: Now, apply the same process to the sub-arrays formed by splitting the array at the pivot:
    - Left sub-array: [5, 3, 4, 2, 1]
    - Right sub-array: [8, 7]
4. **Sort Left Sub-array**:
    - Choose a pivot (1).
    - Partition: [1, 3, 4, 2, 5]
    - Recursively sort the left sub-array (empty) and right sub-array [3, 4, 2, 5].
        - Choose a pivot (5).
        - Partition: [3, 4, 2] and []
        - Recursively sort [3, 4, 2]:
            - Choose a pivot (2).
            - Partition: [2] and [3, 4]
            - Recursively sort [] and [3, 4]:
                - Choose a pivot (4).
                - Partition: [3] and []
                - Recursively sort [] and [] (base case reached).
            - Combine: [2, 3, 4]
        - Combine: [1, 2, 3, 4, 5]
