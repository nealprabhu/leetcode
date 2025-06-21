/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res ={};
    for(let val of nums){
        if(res[val]){
            res[val] +=1
        } else{
             res[val] =1
        }
    }
    let data = Object.entries(res).sort((a,b)=>b[1]-a[1]);
    return data.slice(0, k).map(entry => Number(entry[0]));

};