// Builds up the sort by gradually creating a larger left half which is always sorted
// start by picking the second element in the array
// now compare the second elemnt with the one before it and swap if necessary
// Continue to the next elment and if it is in the incorrect order, iterate through the sorted portion.
// Repeat until the array is sorted.
// time complexity O(n^2)
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for(var j = i -1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

insertionSort([2,4,3,7,3])