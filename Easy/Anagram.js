/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   let tArray = [...t];
//   let sArray = [...s];
//   if (sArray.length !== tArray.length) return false;
//   let hash = sArray.reduce((ac, a) => ({ ...ac, [a]: ac[a] ? 1 + ac[a] : 1 }), {});
//   for (let index = 0; index < tArray.length; index++) {
//     if (hash[tArray[index]] === undefined || hash[tArray[index]] === 0) return false;
//     else hash[tArray[index]] = hash[tArray[index]] - 1;
//   }
//   return true;
// };
var isAnagram = function (s, t) {
  let hash = {};
  if (s.length !== t.length) return false;
  for (let index = 0; index < s.length; index++) {
    hash[s[index]] = hash[s[index]] !== undefined ? hash[s[index]] + 1 : 1;
    hash[t[index]] = hash[t[index]] !== undefined ? hash[t[index]] - 1 : -1;
  }
  for (const iterator in hash) {
    if (hash[iterator] !== 0) return false;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram") === true);
console.log(isAnagram("rat", "car") === false);
console.log(isAnagram("ab", "a") === false);
console.log(isAnagram("aacc", "ccac") === false);
