/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const answer = [];
  const prefix = [];
  const postfix = [];
  prefix[0] = 1;
  postfix[nums.length - 1] = 1;
  for (let index = 1; index < nums.length; index++) {
    postfix[nums.length - 1 - index] = nums[nums.length - index] * postfix[nums.length - index];
    prefix[index] = nums[index - 1] * prefix[index - 1];
    answer[index - 1] = prefix[index - 1] * (postfix[index - 1] === undefined ? 1 : postfix[index - 1]);
    answer[nums.length - 1 - index] = prefix[nums.length - 1 - index] * (postfix[nums.length - 1 - index] === undefined ? 1 : postfix[nums.length - 1 - index]);
  }
  answer[nums.length - 1] = prefix[nums.length - 1] * postfix[nums.length - 1];
  return answer;
};
const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
