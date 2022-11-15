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