/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let  counter = 0;
    let val = n.toString(2).split("");
    for(let data of val){
        if(data == "1"){
            counter++
        }
    }
    return counter;
};