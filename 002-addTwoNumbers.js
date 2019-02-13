/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 * 示例：

 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 **/

function ListNode(val) {
  this.val = val;
  this.next = null;
 }
 
// solution1:
var addTwoNumbers = function (l1, l2) {

    let c = 0;
    let ret = new ListNode(0);
    let curr = ret;

    while (l1 || l2) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        let sum = a + b + c;
        c = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (c) {
        curr.next = new ListNode(c);
    }

    return ret.next;
};

// solution2: 
var addTwoNumbers = function(l1, l2) {
    let dumpy = new ListNode(-1), node = new ListNode(-1);
    dumpy.next = node;
    let carry = 0, curSum = 0;
    while (l1 || l2 || carry) {
        curSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = curSum > 9 ? 1 : 0;
        curSum %= 10;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        node.next = new ListNode(curSum);
        node = node.next;
    }
    return dumpy.next.next;
};


// test 
l1 = {val: 5, next: {val:5 ,next: {val:5}}}
l2 = {val: 1, next: {val:3 ,next: {val:4}}}


addTwoNumbers (l1,l2) //console.log(9-8-6)


