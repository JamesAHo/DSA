// first pillar of javascript
// functions are first class citizen + Lexical scope is javascript engine.
// Closure is combination of function and lexical scope.
// example

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return ` ${grandpa}>${father}>${son}`
        }
    }
}
a()()() // => granpda>father>son

// Excercise
function CallMe() {
    setTimeout(function(){
        console.log(CallMe)
    },4000);
    const CallMe = 'Hello Call Me'
}
CallMe();

// Closure is Memory efficient and encapsulation
// Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('😊');
    return bigArray
}
function heavyDuty2() {
    const bigArray = new Array(7000).fill('😊');
    return function(index) {
        return bigArray[index]
    }
}
// Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '🚀';
    }
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    } 
}
const ohno = makeNuclearButton();

// Example
let view;
function initialized() {
    let called = 0;
    return function() {
        if(called > 0) {
            return;
        } else {
            view = "view";
            called++;
            console.log('view has been set')
        }
    }
}
const startOnce = initialized();
startOnce();
// Example
const array = [1,2,3,4];
for(let i = 0; i <= array.length; i++) {
    setTimeout(function() {
        console.log('I am at index' + array[i])
    },3000)
}
// another way to solve this array is to invoke function when var is the global scope
// var is globally declared
for(var i = 0; i <= array.length; i++) {
  // invoke the function so call i as parameters
  (function(ClosureI){
    setTimeout(function() {
        console.log('I am at index' + array[ClosureI])
    },3000)
  })(i)
}
// by invoking the function closureI the function now exposed to global scope which can access in this.window 
// using Object.scrate to create object
let object = {
    shining: true
}
let newObject = Object.create(object)
