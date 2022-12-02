// special sorting algorithm that works on lists of numbers
// never makes comparision between elements
// implement Radix sort helpers
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// We need a function that count digits
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
}
// Define a function that accepts list of nunmbers
// Figure out how many digits the alrgest number has
// for each iteration of the loop:
    // Create buckets for each digits(0 to 9)
    // Place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9.
// return list at the end
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k  = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length;i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        
        }
        nums = [].concat(...digitBuckets);
        
    }
    return nums;
}
// Radix sort Big 0
// O(nk)
// Space Complexity
// O(n + k) n - length of array and k - number of digits(average)