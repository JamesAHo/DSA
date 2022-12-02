// special sorting algorithm that works on lists of numbers
// never makes comparision between elements
// implement Radix sort helpers
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
