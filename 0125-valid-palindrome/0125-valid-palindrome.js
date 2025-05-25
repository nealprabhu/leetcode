/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
  let str1 = str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(" ").join("");
  return str1 === str1.split("").reverse().join("");
};