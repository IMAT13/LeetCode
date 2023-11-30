/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map[element + ""] !== undefined) return true;
    else map[element + ""] = index + 1;
  }
  return false;
};
const nums = [2, 3, 1, 1];
console.log(containsDuplicate(nums));
