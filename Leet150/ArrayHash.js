// Problem Set
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// solution 1
var containsDuplicate = function(nums) {
    // Sort the array in order
    // Loop through and compair the current index to the next index 
    // if the curr index == next index return true otherwise return false
    let sort = nums.sort();
    for(let i = 0; i < nums.length; i++){
        if(sort[i] == sort[i + 1]) return true;
    }
    return false;
}
// Solution 2 
var containsDuplicate2 = function(nums){
    // freq counter
    // if value in nums exist then save in counter
    // if duplicate + 1 in counter
    // if counter > 1 return true
    // other wise return false
    let counter = {};
    for(let value of nums){
        counter = (counter[value] || 0) + 1;
        if(counter > 1) return true;
    }
    return false;
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function(nums, target) {
    let result = [];
    // time conplexity O^2
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                result.push(i,j);
            }
        }
    }
    return result;
};


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
var isAnagram = function(s, t) {
    let counter1 = {}
    let counter2 = {}
    // edge case when s.length !== t.length return false;
    if(s.length !== t.length) return false;
    for(const val of s){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for(const val of t){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    for(const key in counter1){
        if(counter1[key] !== counter2[key]) return false;
    }
    return true;
};
// notes                         