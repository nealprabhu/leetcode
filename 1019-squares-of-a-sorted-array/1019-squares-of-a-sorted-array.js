/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res =[];
    for(let val of nums){
        res.push(Math.pow(val,2));
    }
    return res.sort((a,b)=> a-b);
};