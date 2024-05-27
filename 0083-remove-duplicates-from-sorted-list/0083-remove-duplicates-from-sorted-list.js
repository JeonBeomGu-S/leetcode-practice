/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
    const dummy = new ListNode();
    let node = dummy;
    let numberSet = new Set();

    while (head != null) {
        console.log(head.val);
        if (numberSet.has(head.val)) {
            node.next = null;
            head = head.next;
        } else {
            numberSet.add(head.val);
            node.next = head;
            head = head.next;
            node = node.next;
        }
    }

    return dummy.next;
};