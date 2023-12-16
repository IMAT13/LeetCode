/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if (x / -1 > 0) return false;
//   let number = x;
//   let ints = [];
//   while (number > 0) {
//     ints.push(number % 10);
//     number = Math.floor(number / 10);
//   }
//   let left = 0;
//   let right = ints.length - 1;
//   while (left < right) {
//     if (ints[left] !== ints[right]) return false;
//     else {
//       left++;
//       right--;
//     }
//   }
//   return true;
// };
var isPalindrome = function (x) {
  if (x / -1 > 0) return false;
  let reverse = 0;
  let number = x;
  while (number > 0) {
    reverse = (number % 10) + reverse * 10;
    number = Math.floor(number / 10);
  }
  return x === reverse;
};
console.log(isPalindrome(121) === true);
console.log(isPalindrome(-121) === false);
console.log(isPalindrome(10) === false);
console.log(isPalindrome(1213) === true);
