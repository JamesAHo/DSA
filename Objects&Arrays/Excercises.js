// Write a function called sameFrequency. Given two positive 
// integers, find out if the two numbers have the same frequency of digits
// your solution MUST have the follow complexities
function sameFrequency(a,b) {
    // If the two numbers have the same frequency
    let valueA = a.toString();
    let valueB = b.toString();
    if(valueA.length !== valueB.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of valueA) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of valueB) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }
    for (let key in frequencyCounter1) {
        console.log(frequencyCounter1[key])
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    console.log(valueA)
    console.log(valueB)
    return true;
 }
// output
sameFrequency(182,182) // true
sameFrequency(182,1822) // fasle

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 function areThereDuplicates(...a) {
   let frequencyCounter = {};
   for(let val of a) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) +1;
    console.log(frequencyCounter[val])
    if(frequencyCounter[val] > 1) return true;
   }
   return false
 }

areThereDuplicates(1,2,3,4,5,6,6,8,9)


