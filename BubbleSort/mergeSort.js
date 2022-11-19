// combination of merging and sorting
// Exploits the fact that arrays of 0 and 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elments then building up a newly sorted array
// Divide and conquer concepts/

// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two inputs arrays
// This function should run in O(n + m) time and O(n+m) space and should not modify the parameters passed to it

// Create an empty array, take a look at the smallest values in each input array
// While there are still valies we haven't look at
    // If the value in the the first array is smaller than the value in the second array, push the value in the first array into out results and move on to the next value in the first array.
    // Once we exhaust one array, push in all remaining values from the other array
    