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

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
function groupAnagrams(strs){
    // mapping charcount to list of anagrams
    let hash = {};
    for(let str of strs){
        let key = str.split('').sort().join('');
        if(!hash[key]){
            hash[key] = [str]
        }else{
            hash[key].push(str)
        }
    }
    return Object.values(hash)
}