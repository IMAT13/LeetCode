/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target, start = 0, end = nums.length - 1) {
  if (start > end) return -1;
  const half = Math.floor((start + end) / 2);
  if (nums[half] === target) return half;
  if (nums[start] <= nums[half]) {
    if (nums[start] <= target && target < nums[half]) return search(nums, target, start, half - 1);
    else return search(nums, target, half + 1, end);
  }
  if (nums[half] < target && target <= nums[end]) return search(nums, target, half + 1, end);
  else return search(nums, target, start, half - 1);
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(nums, target) === 4);
nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log(search(nums, target) === -1);
nums = [1];
target = 0;
console.log(search(nums, target) === -1);
nums = [1, 3];
target = 3;
console.log(search(nums, target) === 1);
nums = [5, 1, 3];
target = 5;
console.log(search(nums, target) === 0);
