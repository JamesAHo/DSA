// write a function accepts a sorted array and a value
function BinarySearch(arr,value) {
   let left = 0;
   let right = arr.length -1;
   let middle = Math.floor(left + right) / 2
   console.log(left, middle, right)
    while ( middle !== value) {
        if( value < arr[middle]) {
            end = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor(left + right) / 2
        
    }
    console.log(left, middle, right)
    return middle
}