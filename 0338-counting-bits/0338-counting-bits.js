/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let val= [];
// let val = new Array(n+1).fill(0);
    for(let i=0;i<=n;i++){
        let data = i.toString(2).split("").filter((res)=>res != "0");
        // val[i] = data.length;
        val.push(data.length);
    }
    return val;
};