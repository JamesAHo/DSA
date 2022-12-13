// concept of higher order function
const multiplyBy = function(num1) {
    return function(num2) {
        return num1 * num2;
    }
}
// scalable codes
const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);
multiplyByTwo(4);
multiplyByTwo(8);

// a more efficient way  is to use arrow functions
const multiplyByy = (num1) => (num2) => num1 * num2