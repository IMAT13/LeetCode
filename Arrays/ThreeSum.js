/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const array = nums.sort((a, b) => a - b);

  for (let index = 0; index < array.length - 2; index++) {
    if (index > 0 && array[index] === array[index - 1]) continue;

    let left = index + 1;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[index] + array[left] + array[right];

      if (sum === 0) {
        result.push([array[index], array[left], array[right]]);

        while (left < right && array[left] === array[left + 1]) left++;
        while (left < right && array[right] === array[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
