// Lexical environment is the defination area of an expression. An item's lexical scope is the pace in which the item got created.
// In javascript our lexical scope (available data + variables where the function was defined)
// determines our avaible variables. Not where the function is called(dynamic scope)

// lexical environment printName
function printName() {
    return 'James A Ho'
};
// lexical environment findName
function findName() {
    function a() {

    }
    return printName();
};
// lexical environment sayMyName
function sayMyName() {
    return findName();
};
// Lexical Scope within lexical environment
function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c';
            return 'James A Ho';
        }
    }
}
sayMyName()()() // => result will be James A Ho
