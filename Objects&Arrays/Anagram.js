// Given two strings, write a function to determine if The second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another
// such as cinema, formed from iceman

function validAnagram(arr1, arr2) {
    // edge case
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;

    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }
    // compare frequency 1 and frequency 2
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;

    }
    return true;
}


validAnagram("", "") // return true
validAnagram("aaz", "zza") // return false

