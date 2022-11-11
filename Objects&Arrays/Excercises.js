// Write a function called sameFrequency. Given two positive 
// integers, find out if the two numbers have the same frequency of digits
// your solution MUST have the follow complexities


function sameFrequency(a,b) {
    // If the two numbers have the same frequency
    let valueA = a.toString();
    let valueB = b.toString();
    if(valueA.length !== valueB.length) return false;
    let frequencyCounter1 = 0;
    let frequencyCounter2 = 0;
    for(let val of valueA) {
        frequencyCounter1 = (frequencyCounter1 || 0) + 1;
    }
    for(let val of valueB) {
        frequencyCounter2 = (frequencyCounter2 || 0) +1;
    }
    for (let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    console.log(valueA)
    console.log(valueB)
    return true;
 }

// output
sameFrequency(182,182) // true
sameFrequency(182,1822) // fasle
  





