// Useful for discussing trade-offs betweern different approaches
// when codes slow down or crashed, identifying parts of the code that are inefficient can help us find pain points in our applications.

// suppose we want to write a function that calculates the sum of all numbers from 1 up to some number n

// Function 1
function sum(n) {
    let total = 0;
    for (let i= 1; i <=n;i++) {

    }
    return total;
}
console.log(sum(3)); // add up to 3
// test to see the performace
let t1 = performance.now();
sum(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)} seconds.`)
 
// Function 2
// performance wise function 2 is significantly faster
function sum(n) {
    return n * (n+1) /2
}

console.log(sum(3)); // add up to 3

// which function is better ?
// faster? less memory-intensive? more readable?

// NOTED: The problem with time
// different machines will record different times
// The same machine will record different times!
// for fast algorithms, speed measurements may not be precise enough

// Counting Operations
// operations regardless of the size of n