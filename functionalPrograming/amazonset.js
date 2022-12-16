// Example
// Amazon shipping
const user = {
    name:'James',
    active: true,
    cart: [],
    purchases: []
}
// using compose method
const amazonHistory = []
const compose = (f,g) => (...args) => f(g(...args));

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    itemToCart
)(user,{name:'laptop',price:200})
function purchaseItem(...fns) {
    return fns.reduce(compose)
}
function itemToCart(user, item) {
    const updatedCart = user.cart.concat(item);
    return Object.assign({},user,{cart:updatedCart})
}
function applyTaxToItems(user) {
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name:item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({},user,{cart:updatedCart});
}
function buyItem(user) {
    return Object.assign({}, user, {purchases:user.cart})
}
function emptyCart(user) {
    return Object.assign({},user,{cart:[]});
}
// Implement a cart features: 
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

