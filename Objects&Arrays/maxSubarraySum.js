// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculte the maxium sum of n consecutive elements in array
// Sliding window
// Sliding window pattern involes creating a window which can either be an array or number from on position to another

// Naive solution
function maxSubarraySum(arr, num) {
    if(num > arr.length) return null;
    var max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += [arr[i + j]]
        }
        if(temp > max) {
        max= temp;
        }
        console.log(temp.max)

    }
    return max;
}
// REFACTOR solution













// outputs
maxSubarraySum = ([1,2,5,2,8,1,6]) 
maxSubarraySum = ([], 4) // output null
