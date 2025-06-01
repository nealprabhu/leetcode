/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
let val = new Array(n+1).fill(0);
    for(let i=1;i<=n;i++){
        let data = i.toString(2).split("").filter((res)=>res != "0");
        val[i] = data.length;
    }
    return val;
};