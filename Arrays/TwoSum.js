/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map[element + ""] !== undefined) return [index, map[element + ""]];
    else if (target - element === 0) map[target - element] = index;
    else map[target - element] = index;
  }
};
const nums = [0, 4, 3, 0];
const target = 0;
console.log(twoSum(nums, target));
