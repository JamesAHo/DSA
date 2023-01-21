// Problem Solving
// understand the problem
// explore concreate examples
// break it down
// Solve/Simplify
// Look back and Refactor

// Understanding the problem

// ==============================================
// Write a function which takes two numbers and return their sum
// ==============================================

// 1.Can I restate the problem in my own words?
"add two numbers"
// 2. What are the inputs that go into the problem?
"two numbers"
// 3. What are the outputs that should come from the solution to the problem?

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?

// Example
// write a function which takes in a string and return counts of each characters in the string

function CharCount(str) {
    // make object to return at end
    // loop over string
    // return object at end for each character ...
        // if the char is a key in number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it and set value to 1
        // if character is something else (space, period, etc...don't do anything)
    // return object at end
}
function CharCount(str) {
    // make object to return at end
    var result = {}
    // loop over string
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        };
    }
    // return object at end for each character ...
        // if the char is a key in number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it and set value to 1
        // if character is something else (space, period, etc...don't do anything)
    // return object at end
    return result;
}

// Write a function that check if array has three consecutive odd numbers
function threeConsecutiveNumbers(arr) {
    // use frequencycounter
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            count++;
            if(count === 3) return true;
        } else {
            count = 0
        }
    }
    return false;
}
