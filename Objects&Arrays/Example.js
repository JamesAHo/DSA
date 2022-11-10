// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's correspinding value squred in the second array. The freqency of values must be the sames
// use objects or sets to collect values/frequencies of values
function same(arr1,arr1) {
    // edge case if arr1.length != arr2.length
    if(arr1.length != arr2.length) return false;
    // turn arrays into objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;

}

// time complexity is O(3n) => O(n)


//same([1,2,3],[4,1,9]) true
//same([1,2,3],[4,1]) false
//same([1,2,3],[4,4,1]) false (must be the same freqency)
