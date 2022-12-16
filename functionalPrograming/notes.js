// Example
// Amazon shipping
const user = {
    name:'James',
    active: true,
    cart: [],
    purchases: []
}
// Implement a cart features: 
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// ** Pure Function === no side effect

// Indempotence
// Idempotence is any function that can be executed several times without changing the final result beyond its first iteration. Idempotence is a technical word, used in mathematics and computer science, that classifies a function's behavior
function notGood(num) {
    return Math.random(num)
}
notGood()
// Imperative vs Declerative
// tell program what to do NOT how to do it

// Immutability concept
const obj = {name:'James'}
function clone(obj) {
    return {...obj} // this is pure
};
obj.name = 'Jenny';
