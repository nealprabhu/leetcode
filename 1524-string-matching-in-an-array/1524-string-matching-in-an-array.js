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


// alternane sol
// var stringMatching = function(words) {
//     const result = [];
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (i !== j && words[j].includes(words[i])) {
//                 result.push(words[i]);
//                 break;
//             }
//         }
//     }
//     return result;
// };
