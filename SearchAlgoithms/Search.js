// Linear Search
// write a function accepts an array and a value
function search(arr,value) {
   for( let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        return i
    } else {
        return -1
    }
   } 
}