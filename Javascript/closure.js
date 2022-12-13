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

