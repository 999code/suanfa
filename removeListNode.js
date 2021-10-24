
// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// 说明：给定的 n 保证是有效的。


const removeNthFromEnd=function(head,n){
    // 初始化dummy节点
    const dummy = new ListNode()
    // dummy指向头节点
    dummy.next=head
    const fast=dummy
    const slow=dummy
    // 快指针闷头走n步
    while(n!==0){
        fast=fast.next
        n--
    }

    // 快慢指针一起走
    while(fast.next){
        fast=fast.next
        slow=slow.next
    }
    // 慢指针删除自己的节点
    slow.next=slow.next.next
    return dummy.next

}










const deleteNthNode=function(head,n){
    const dummy=new ListNode()
    dummy.next=head
    const fast=dummy
    const slow=dummy
    while(n!==0){
        fast=fast.next
        slow=slow.next
        n--
    }
    while(fast.next){
        fast=fast.next
        slow=slow.next
    }
    slow.next=slow.next.next
    return dummy.next
}