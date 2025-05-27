/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      let stash = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (stash.includes(sum) && nums.includes(sum)) {
      return [nums.indexOf(sum), i];
    } else {
      stash.push(nums[i]);
    }
  }
};