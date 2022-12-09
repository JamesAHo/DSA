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
// 
