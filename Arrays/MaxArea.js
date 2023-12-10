/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (array) {
  let max = 0;
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex < endIndex) {
    let area = (endIndex - startIndex) * Math.min(array[endIndex], array[startIndex]);
    max = Math.max(area, max);
    if (array[startIndex] < array[endIndex]) startIndex++;
    else endIndex--;
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
console.log(maxArea([1, 1]) === 1);
console.log(maxArea([2, 3, 10, 5, 7, 8, 9]) === 36);
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]) === 17);
