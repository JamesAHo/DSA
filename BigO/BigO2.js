// Example of O2
// O(n) operation indinsde an O(n) === O(n^2)
function printAllPairs(n) {
    for(var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}