/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var mergeKLists = function(lists) {
    let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;
};

// var mergeKLists = function(lists) {
 
//     // let val = [].concat(...lists);
//     // let val1 =  val.sort((a,b)=> a-b);
//      return lists.reverse().reduce((acc,cul)=> new LinkedNode(cul, acc),null);
// };

// class LinkedNode{
//     constructor(val, next=null){
//         this.value =val;
//         this.next = next;
//     }
// }