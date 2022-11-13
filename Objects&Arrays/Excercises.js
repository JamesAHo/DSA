// Write a function called sameFrequency. Given two positive 
// integers, find out if the two numbers have the same frequency of digits
// your solution MUST have the follow complexities
function sameFrequency(a,b) {
    // If the two numbers have the same frequency
    let valueA = a.toString();
    let valueB = b.toString();
    if(valueA.length !== valueB.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of valueA) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of valueB) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }
    for (let key in frequencyCounter1) {
        console.log(frequencyCounter1[key])
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    console.log(valueA)
    console.log(valueB)
    return true;
 }
// output
sameFrequency(182,182) // true
sameFrequency(182,1822) // fasle

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 function areThereDuplicates(...a) {
   // using frequency counter pattern to count and if counter > 1 then return true for duplicate
   let counter = {};
   for ( let val of a) {
    counter[val] = (counter[val] || 0) + 1;
    if(counter[val] > 1 ) return true;
   }
   return false
 }
// time complexity is O(N)
areThereDuplicates(1,2,3,4,5,6,6,8,9)

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

function averagePair() {
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
}
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr,num) {
    // edge case if arr.length < num return null
   let maxSum = 0;
   let tempSum = 0;
   if(arr.length < num ) return null;
   for(let i = 0; i < num; i++) {
        maxSum += arr[i];
   }
   tempSum = maxSum;
   for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
   }
   return maxSubarraySum;

}

