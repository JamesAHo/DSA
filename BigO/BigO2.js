// Example of O2
// O(n) operation indinsde an O(n) === O(n^2)
function printAllPairs(n) {
    for(var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// Big O shorthands
// Arithmetic operations are constant
// Variable assignments is constant
// Accessing elements in an array by index or object is constant
// in a loop, the complexity is length of the loop times the complexity of whatever happends inside

// SPACE COMPLEXITY
// Rules of thumbs => primitive(boolean, numbers, undefined,null) are constant space

