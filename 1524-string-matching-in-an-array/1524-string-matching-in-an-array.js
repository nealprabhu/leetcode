/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
     let res = [];
  for (let value of words) {
    words.filter((ele) => {
      if (ele.includes(value) && ele.length !== value.length) {
        !res.includes(value) ? res.push(value) : "";
      }
    });
  }
  return res;
    
};