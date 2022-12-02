// Just like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element and finding the index where pivot should end up in the sorted
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

function Quicksort(arr) {
    if(arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length-1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return Quicksort(left).concat(pivot, Quicksort(right))

};
// better way 
// it will help to accept three arguments: an array, a start index
// and an end index(these can default to 0 and the array length -1, repestively).
// grab the pivot from the start of the array.
// Store the current pivot index in a variable(this will keep track of where the pivot should end up).
// Loop throught the array from the start until the end
// If the pivot is greater than the current ele, increment the pivot index variable and then swap the current ele with the ele at the pivot.
// Swap the starting ele with the pivot index.
// return the pivot index.
// rescurive
function pivot(arr, left = 0, right = arr.length -1) {


    
}