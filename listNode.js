// 题描述：给定一个链表，判断链表中是否有环。

// 示例 1：

// 输入：[3,2,0,4]（链表结构如下图） 输出：true

// 解释：链表中存在一个环

const hasCycle=function(head){
    while(head){
        if(head.flag){
            return true
        }else{
            head.flag=true
            head=head.next
        }
    }
    return false
}


// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// 说明：给定的 n 保证是有效的。
const removeNthFromEnd=function(head,n){
    const dummy.next=head
    let fast=dummy
    let slow=dummy
    while(n!==0){
        fast=fast.next
    }
    while(fast.next){
        fast=fast.next
        slow=slow.next
    }

    slow.next=slow.next.next
    return dummy.next
}



// 完全反转一个链表

// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

const reverseList=function(head){
    let pre=null
    let cur=head
    while(cur!==null){
        let next=cur.next
        cur.next=pre
        pre=cur
        cur=next
    }
    return pre
}

// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明: 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

const reverseBetween=function(head,m,n){
    let pre,cur,leftHead
    const dummy=new ListNode()

    dummy.next=head
    let p=dummy
    for(let i=0;i<m-1;i++){
        p=p.next
    }

    leftHead=p
    let start=leftHead.next
    pre=start
    cur=pre.next
    for(let i=m;i<n;i++){
        let next=cur.next
        cur.next=pre
        pre=cur
        cur=next

    }
    leftHead.next=pre
    start.next=cur

    return dummy.next
}

// 题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。

// 示例：

// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

const mergeTwoList=function(l1,l2){
    let head=new ListNode()
    let cur=head
    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next=l1
            l1=l1.next
        }else{
            cur.next=l2
            l2=l2.next
        }
        cur=cur.next
    }
    cur.next=l1!==null?l1:l2
    return head.next
}




// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

const deleteDuplicates=function(head){
    let cur=head
    while(cur!==null && cur.next!==null){
        if(cur.val===cur.next.val){
            cur.next=cur.next.next
        }else{
            cur=cur.next
        }
    }
    return head
}

// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

// 示例 1:

// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3


const deleteDuplicates=function(head){
    if(!head || !head.next){
        return head
    }
    let dummy=new ListNode()
    dummy.next=head
    let cur=dummy
    while(cur.next && cur.next.next){
        if(cur.next.val=cur.next.next.val){
            let val=cur.next.val
            while(cur.next && cur.next.val=val){
                cur.next=cur.next.next
            }
        }else{
            cur=cur.next
        }
    }
    return dummy.next
}








