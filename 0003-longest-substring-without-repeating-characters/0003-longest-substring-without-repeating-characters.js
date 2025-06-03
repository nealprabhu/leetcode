/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    
     let start =0;
    let end =0;
    let maxlength = 0;
    const unique = new Set();
    while(end< str.length){
        if(!unique.has(str[end])){
            unique.add(str[end]);
            end++;
            maxlength = Math.max(maxlength, unique.size);
        } else{
            unique.delete(str[start]);
            start++;
        }
    }
    return maxlength;
};