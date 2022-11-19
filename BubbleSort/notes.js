// sorting uis the process of rearranging the items in a collection. So that the items in some kind of order
// sorting numbers from smallest to largest
// sorting movies based on released year
// sorting movies based on revenue
// sortting is an increadibly common task, so it's good to know how it works
// There are many diifferent ways top sort things, and different techniques have their own advantage

// javascript built in sorting

function numberCompare(num1, num2 ) {
    return num1 - num2;
}


// Bubble sorting
// sorting algorithm where the largest values bubble up to top values/
function Bubblesort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// Bubblesort optomized solution
function Bubblesort2(arr) {
    var noSwap;
    for(var  i =  arr.length; i > 0; i--) {
        noSwap = true;
        for(var j = 0; j < i -1;j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}