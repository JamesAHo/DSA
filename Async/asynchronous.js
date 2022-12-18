// "Async" stands for "asynchronous," which means that a script or function is executed independently of other scripts or functions, and is not blocked by other scripts or functions that may be running. This allows multiple scripts or functions to be run at the same time, which can be useful for improving the performance and responsiveness of a program.

// "Sync" stands for "synchronous," which means that a script or function is executed in the order it appears in the code, and is blocked by other scripts or functions that may be running. This means that one script or function must complete before the next one can start, which can make a program feel slower and less responsive.

// In JavaScript, most functions are asynchronous by default, but there are some built-in functions that are synchronous. For example, the setTimeout function is asynchronous, because it runs a callback function after a specified amount of time has passed. In contrast, the alert function is synchronous, because it blocks the execution of the rest of the script until the user dismisses the alert.

// example
async function getData() {
    const response = await fetch('https://example.com/data.json');
    const data = await response.json();
    console.log(data);
  }
  
  getData();

// Promises 
// 
const promise = new Promise((resolve,reject) => {
    if(true){
        resolve('worked');
    } else {
        reject('Failed');
    }
});
// promise .all
const promise1 = new Promise((resolve,reject) => {
   setTimeout(resolve,100,'PAWPAWPAWPAWPAWPAWPAWPAWPA')
});
const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,200,'PewPeww');
 });
 const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,400,'PeoPeoo');
 });
 const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve,400,'Phawphaww');
 });
Promise.all([promise1, promise2, promise3, promise4]).then(values => {
    console.log(values);
})