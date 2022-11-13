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

// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array
// and counts the unique values in the array
// there can be negative numbers in the array but will always be sorted

function countUniqueValues(arr) {
    if(arr.length === 0) return 0
   var i = 0
   for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
     }
     return i + 1
    }

countUniqueValues([1,2,3,4,5,6]) // output 6

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(s,t) {
    // good luck. Add any arguments you deem necessary.
    let left = 0;
    let right = 0;
    while(left < s.length ) {
        if(s[left] === t[right]) {
            left++;
            right++
        } else {
            right++
            if(right > t.length) return false
        }
    }
    
    return true
    
  }