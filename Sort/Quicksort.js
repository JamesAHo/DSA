// Just like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element and finding the index where pivot should end up in the sorted
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot. 
function Quicksort(arr) {
    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...left, pivot, ...right]

}