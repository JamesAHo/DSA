// hoisting process
var favoriteNumbers = 2
var numberThoughts = function() {
    console.log("Original favoriteNumbers:" + favoriteNumbers);

    // replace new number
    var favoriteNumbers = 16;
    console.log("Original favoriteNumbers:" + favoriteNumbers);
}
numberThoughts();