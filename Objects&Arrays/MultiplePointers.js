// Creating pointers or values that correspond to an index or position
// and move towards the begining, end of middle based on certain condition
// very efficient for solving problems with mininal space complexity as well

// Example
//Write a function called sumZero which accepts a sorted array of int
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to zero or undefined if a par does it exist

// Naive implementation O(N^2)
function sumZero(arr) {
    // edge case if arr.length / 2 !== 0 => undefined
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i]+arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }

}
// REFACTOR
function sumZero2(arr) {
    // two pointers
    let left = 0 // left pointer
    let right = arr.length -1 // right pointer
    // while loop
    while (left < right) {
        let sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

sumZero2([-4,-3,-2,-1,0,3,4,6])