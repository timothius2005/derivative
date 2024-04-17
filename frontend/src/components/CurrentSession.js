
/*
An multidimensional array has 2 values in each node. The first value is a string. The second value is a number. The objective is to take the array
make a new array where each string is added the number of times equal to the second node using javascript.

function repeatStrings(arr) {
    const result = [];

    for (const [string, count] of arr) {
        // Create an array with 'count' copies of the string
        const repeatedStrings = Array.from({ length: count }, () => string);
        result.push(...repeatedStrings);
    }

    return result;
}

// Example usage:
const originalArray = [
    ['apple', 3],
    ['banana', 2],
    ['cherry', 4]
];

const newArray = repeatStrings(originalArray);
console.log(newArray); // Output: ['apple', 'apple', 'apple', 'banana', 'banana', 'cherry', 'cherry', 'cherry', 'cherry']


A multidimensional array looks like the following:
[dog,5,yes],[cat,5,no],[mouse,2,yes],[fish,2,yes],[bird,2,no]

the objective is to take the array and make a new array where each string is added the number of times equal to the second node. If the 3rd node is yes, alternate between that node and the node below it.

dog, cat, dog, cat, dog, cat, dog, cat, dog, cat, mouse, fish, bird, mouse, fish, bird

*/