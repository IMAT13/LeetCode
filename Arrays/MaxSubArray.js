/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
