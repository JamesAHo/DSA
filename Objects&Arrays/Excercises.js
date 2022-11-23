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
        // sliding window method
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
   }
   return maxSum

}
// Given an integer array nums, find the subarray which has the largest sum and return its sum.
// Maximum subarray
function maxSubarraySum(nums) {
    let maxSum = -Infinity;
    let tempSum = 0;
    for(let i = 0; i < nums.length; i++) {
        tempSum = Math.max(nums[i], tempSum + nums[i])
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
// Find minSubArray Solution
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

// findLongestSubString
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }