/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (array, start = 0, end = array.length - 1) => {
  if (end - start <= 1) {
    return Math.min(array[start], array[end]);
  }

  const half = Math.floor((end + start) / 2);

  if (array[half] > array[end]) {
    return findMin(array, half, end);
  } else if (array[start] > array[half]) {
    return findMin(array, start, half);
  } else {
    return array[start];
  }
};

// var findMin = function(nums) {
//     var left = 0,
//         right = nums.length - 1

//     while (left < right){
//         var mid = Math.floor((left + right)/2)
//         if (nums[mid] > nums[right]) left = mid + 1
//         else right = mid
//     }
//     return nums[left]
// };

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums) === 1);
nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums) === 0);
nums = [11, 13, 15, 17, 18];
console.log(findMin(nums) === 11);
