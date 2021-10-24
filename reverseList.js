// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

const reverseList = function (head) {
    // 初始化前驱节点weinull
    let pre = null
    let cur = head
    while (cur !== null) {
        // 记录next节点
        let next = cur.next
        // 反转指针
        cur.next = pre
        // pre往前走一步
        pre = cur
        // cur往前走一步
        cur = next
    }
    return pre
}



// 局部反转一个链表
// 反转链表真是座金矿，反转完整体反转局部，反转完局部还能每 k 个一组花式反转（最后这个略难，我们会放在真题训练环节来做）。虽然难度依次进阶，但只要把握住核心思想就没问题，下面咱们来看看如何反转局部：

// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明: 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL


const reverseBetween = function (head, m, n){
    let pre, cur, leftHead;
    
    const dummy = new ListNode();
    
    dummy.next = head
    
    let p = dummy

    for(let i = 0; i < m - 1; i++) {
    p = p.next
}
leftHead = p
let start = leftHead.next
pre = start
cur = pre.next
for (let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
}
leftHead.next = pre
start.next = cur
return dummy.next

}
