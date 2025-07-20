/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = [];
    let value = [];
    if (arr.length ===0 ) {
    return arr;
   }
    if (arr.length < size) {
     res.push(arr);
     return res;
   } 

  for (let val of arr) {
    if (value.length === size) {
      res.push(value);
      value = [];
    }
    value.push(val);
  }
  res.push(value);
  return res;
};
