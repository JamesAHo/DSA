// Compose
// In JavaScript, the compose and pipe functions are higher-order functions that allow you to combine multiple functions into a single function. These functions are commonly used in functional programming to create more complex or customized behavior by combining simple functions in various ways.
// The compose function combines multiple functions such that the output of one function is passed as the input to the next function. It applies the functions from right to left, so the output of the last function in the list is passed as the input to the first function.

// example

const compose = (f,g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3ThenAbs = compose(multiplyBy3,makePositive,makePositive);

multiplyBy3ThenAbs(-50);

// PIPE
// The pipe function is similar to compose, but it applies the functions from left to right, so the output of the first function in the list is passed as the input to the second function. Here is an example of using pipe to create a new function that applies two functions in sequence:
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const add1 = (x) => x + 1;
const mul2 = (x) => x * 2;

const mul2ThenAdd1 = pipe(mul2, add1);
console.log(mul2ThenAdd1(3));  // 7

// Arity

