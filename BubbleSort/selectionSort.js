// SImilar to bubble, but instead opf first placing large values into sorted position, it places small valuies into sorted position
// store the first element as the smallest value yoyuve've seen so far.
// Compare this item to the next item in the array utill yiou find a smaller number
// If a smaller number is found, desinate that smaller number to be the new minium and contue untill the end of the array
// If the minium is not the value(index) you initially began with, swap the two values.
// Repeat this with the next elementuntill array is sorted

function selectionSort(arr) {
    for(var i=0; i < arr.length; i++) {
        var lowest = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j
            }
            
        }
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}
selectionSort([34,22,14,42,17])