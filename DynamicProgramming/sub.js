// Dynamic programing with recursive solution
function fib(n, memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    var ressult = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = ressult
    return ressult;

}