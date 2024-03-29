// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
function topKFrequent(nums,k){
    let map =  {};
    for(let num of nums){
        map[num] = (map[num] || 0) + 1;
    }
    return Object.entries(map).sort((a,b) => b[1] - a[1]).map(val => Number(val[0])).slice(0,k);
} 