// Define what recursion is and how it can be used
// understand the two essential components of a recursive function
// Visualize the call stack to better debug and undersstand recursive functions
// use helper method recursion and pure recursion to solve more difficult problems

// recursion => a process that calls itself
// Base Case => Different Input

// SImple base case

function sumRange(sum) {
    if(num === 1) return 1
    return num + sumRange(num -1)
}
// Factorial recursive
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num -1)
}
// implementation of helper method recursion
// outer function is not recursive and call innter function which is recursive
function outer(input) {
    var outerScopeVariable = []
    function helper(helperInput) {
        helper(helperInput--)
    }
    helper(input)
    return outerScopeVariable;
}
// Pure recursion
// for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
function collectOddValues(arr) {
    let newArr = [];
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) return newArr.push(arr[0]);
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
// Write a function called producOfArray which takes in  an array of numbers and returns the product of them all

function producOfArray(arr) {
    let result = 1
    for(let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
// recursive version
function producOfArray2(arr) {
    let result = [];
    if(arr.length === 0) return 1;
    return arr[0] * result.concat(producOfArray2(arr.slice(1)))
}
// Fib sequence
// fb(n) = fib(n-1) + fib(n - 2)
function fib(n) {
    if (n < 3) return 1;
    let prev = 1;
    let curr = 1;
    for(let i = 2; i < n; i ++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
// rescursive fib
function fib2(n) {
    if(n <= 2) return 1;
    return fib2(n-1) + fib2(n - 2)
}
// reverse string recursion
function reverse(str) {
    if(str.length <= 1) return str;
    return str.charAt(str.length -1) + reverse(str.substring(0, str.length -1))
}