// Naive String Search
function NaiveString(long,short) {
    let count = 0;
    for(var i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++){
            if(short[i] !== long[j]) {
                break;
            }
            if(j === short.length - 1) {
                count++;
            }
        }
    }
}
NaiveString("Lori loled", "lol")