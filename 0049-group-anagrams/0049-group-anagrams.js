/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     hash ={};
    strs.forEach((str)=>{
        let letter = str.split("").sort();
        hash[letter]? hash[letter].push(str): hash[letter] = [str];
    });
    return Object.values(hash);
};