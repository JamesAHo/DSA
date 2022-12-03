// Optimial solution
// find midpoints/
// reverse the midpoints

const findMidpoint = (head) => {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}
const reverse = (head) => {
    let prev = null;
    let cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
const compare = (list1,list2) => {
    while(list1 && list2) {
        if(list1.val !== list2.val) return false;
        list1 = list1.next;
        list2 = list2.next
    }
    return true
}

const isPalindrome = (head) => {
    const midpoint = findMidpoint(head);
    const tail = reverse(midpoint);
    return compare(head,tail)

}