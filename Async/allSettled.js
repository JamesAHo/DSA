// ES2020
const promise1 = new Promise((resolve,reject) => setTimeout(resolve, 3000));
const promise2 = new Promise((resolve,reject) => setTimeout(reject, 3000));

// promise all
Promise.all([promise1, promise2]).then(data => console.log(data));
Promise.allSettled([promise1, promise2]).then(data => console.log(data)).catch(e => console.log('error', e));

