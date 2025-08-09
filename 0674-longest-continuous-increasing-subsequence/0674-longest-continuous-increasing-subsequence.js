/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let counter =1;
    let finalCounter =1
    for(let i=0; i< nums.length; i++){
        if(nums[i]<nums[i+1]){
            counter++;
            finalCounter = Math.max(counter,finalCounter);
        } else{
            counter =1;
        }
    }
    return finalCounter;
};