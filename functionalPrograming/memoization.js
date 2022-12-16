// caching
function addto100(n) {
    return n + 100;
}

function memorizedAddto100(n) {
    // using closure that cache can be access in inner function
    let cache = {};
    if(n in cache) {
        return cache[n];
    } else {
        console.log('long time')
        cache[n] = n + 80;
        return cache[n];
    }
}
memorizedAddto100(5)
memorizedAddto100(5)