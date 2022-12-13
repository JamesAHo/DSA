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