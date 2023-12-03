/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let realMax = -Infinity;
  let optimisticForwardMax = 1;
  let optimisticBackwardMax = 1;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      optimisticForwardMax *= nums[index];
      if (optimisticForwardMax > realMax) realMax = optimisticForwardMax;
    } else {
      optimisticForwardMax = 1;
      if (0 > realMax) realMax = 0;
    }
    if (nums[nums.length - 1 - index]) {
      optimisticBackwardMax *= nums[nums.length - 1 - index];
      if (optimisticBackwardMax > realMax) realMax = optimisticBackwardMax;
    } else {
      optimisticBackwardMax = 1;
      if (0 > realMax) realMax = 0;
    }
  }
  return realMax;
};
