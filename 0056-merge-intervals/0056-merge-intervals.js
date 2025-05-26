/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sorted = intervals.sort((a, b) => a[0] - b[0]);
    // let stash =[];
    // for(let i=0;i<sorted.length;i++){
    //     let first =sorted[i];
    //     let last  =sorted[i+1] ?? 0; 
    //     if(first[0] <= last[1] && first[1] >= last[0] ){
    //         stash.push([Math.min(first[0],last[0]), Math.max(first[1],last[1])]);
    //         i++
    //     } else{
    //         stash.push([first[0], first[1]]);
    //     }
    // }
    //  let sorted = intervals.sort((a, b) => a[0] - b[0]);
    let res = [sorted[0]]
    
    for (let i = 1; i < sorted.length; i++) {
      let currStart = sorted[i][0]
      let currEnd = sorted[i][1];
      let lastEnd = res[res.length - 1][1];
      
      if (currStart <= lastEnd) {
        res[res.length - 1][1] = Math.max(lastEnd, currEnd);
      }
      else {
        res.push(sorted[i])
      }
    }
    
    return res;
};