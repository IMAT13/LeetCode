/**
 * @param {number} length
 * @return {number}
 */
// Time Limit
// var climbStairs = function (length) {
//   if (length === 1 || length === 2) return length;
//   return climbStairs(length - 1) + climbStairs(length - 2);
// };
var climbStairs = function (length) {
  let result = [1, 1];
  for (let index = 2; index <= length; index++) {
    result.push(result[index - 1] + result[index - 2]);
  }
  return result[length];
};
console.log(climbStairs(2), climbStairs(2) === 2);
console.log(climbStairs(3), climbStairs(3) === 3);
console.log(climbStairs(4), climbStairs(4) === 5);
console.log(climbStairs(5), climbStairs(5) === 8);
console.log(climbStairs(44), climbStairs(5) === 8);
