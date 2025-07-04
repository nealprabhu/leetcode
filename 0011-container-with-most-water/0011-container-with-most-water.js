/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // totalArea= 0;
    // let b1= height.length-1;
    // for (let a1=0; a1<b1; a1++){
    //         let tempArea = Math.min(height[a1],height[b1])*(b1-a1);
    //         totalArea = totalArea>tempArea?totalArea: tempArea;
    //         height[a1] >= height[b1] && b1--;
    // }
    // return totalArea;
let total =0; left =0;right =height.length -1; 
while(left<right) {
let temptotal = Math.min(height[left],height[right])*(right-left);
total = Math.max(total,temptotal);
height[left]<=height[right]? left++: right--;
}
return total;
};