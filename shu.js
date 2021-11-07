const root={
    val:'A',
    left:{
        val:'B',
        left:{
            val:'C'
        },
        right:{
            val:'D'
        }
    },
    right:{
        val:'E',
        left:{
            val:'F'
        },
        right:{
            val:'G'
        }
    },
}


// function preorder(root){
//     if(!root) return
//     preorder(root.left);
//     preorder(root.right);
//     console.log(root.val);
// }

preorder(root)

function preorder(root){
    if(!root) return
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}












// 堆 http://interview.poetries.top/algorithm-interview/note/18-%E7%89%B9%E6%AE%8A%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91%E2%80%94%E2%80%94%E5%A0%86%E7%BB%93%E6%9E%84%E5%8F%8A%E5%85%B6%E5%9C%A8%E6%8E%92%E5%BA%8F%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8.html#%E5%A0%86%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C-%E4%BB%A5%E5%A4%A7%E9%A1%B6%E5%A0%86%E4%B8%BA%E4%BE%8B
// 完全二叉树是指同时满足下面两个条件的二叉树：

// 从第一层到倒数第二层，每一层都是满的，也就是说每一层的结点数都达到了当前层所能达到的最大值
// 最后一层的结点是从左到右连续排列的，不存在跳跃排列的情况（也就是说这一层的所有结点都集中排列在最左边）。


// 对于索引为 n 的结点来说：

// 索引为 (n-1)/2 的结点是它的父结点
// 索引 2*n+1 的结点是它的左孩子结点
// 索为引 2*n+2 的结点是它的右孩子结点

// 我们需要关注的动作有两个：

// 如何取出堆顶元素（删除操作）
// 往堆里追加一个元素（插入操作）
// 至于堆的初始化，也只不过是从空堆开始，重复执行动作2而已。因此，上面这两个动作就是堆操作的核心。

// #取出堆顶元素
// 取出元素本身并不难，难的是如何在删除元素的同时，保持住队的“大顶”结构特性。为了做到这点，我们需要执行以下操作：

// 用堆里的最后一个元素（对应图中的数字1）替换掉堆顶元素。
// 对比新的堆顶元素（1）与其左右孩子的值，如果其中一个孩子大于堆顶元素，则交换两者的位置：


// 入参是堆元素在数组里的索引范围，low表示下界，high表示上界
function downHeap(low, high) {
    // 初始化 i 为当前结点，j 为当前结点的左孩子
    let i=low,j=i*2+1 
    // 当 j 不超过上界时，重复向下对比+交换的操作
    while(j <= high) {
        // 如果右孩子比左孩子更大，则用右孩子和根结点比较
        if(j+1 <= high && heap[j+1] > heap[j]) {
            j = j+1
        }
        
        // 若当前结点比孩子结点小，则交换两者的位置，把较大的结点“拱上去”
        if(heap[i] < heap[j]) {
            // 交换位置
            const temp = heap[j]  
            heap[j] = heap[i]  
            heap[i] = temp
            
            // i 更新为被交换的孩子结点的索引
            i=j  
            // j 更新为孩子结点的左孩子的索引
            j=j*2+1
        } else {
            break
        }
    }
}



// 往堆里追加一个元素
// 当添加一个新元素进堆的时候，我们同样需要考虑堆结构的排序原则：

// 新来的数据首先要追加到当前堆里最后一个元素的后面。比如我现在要新增一个10，它就应该排在最后一层的最后一个位置：

// 不断进行向上对比+交换的操作：如果发现10比父结点的结点值要大，那么就和父结点的元素相互交换，再接着往上进行比较，直到无法再继续交换为止。首先被比下去的是值为6的直接父结点：

// 接着继续往上找，发现10比根结点9还要大，于是继续进行交换：

// 根结点被换掉后，再也无法向上比较了。此时，我们已经得到了一个追加过数字10的新的堆结构：

// 上述这个反复向上对比+交换的过程，用编码实现如下（仔细看注释）：
// 入参是堆元素在数组里的索引范围，low表示下界，high表示上界
function upHeap(low, high) {
    // 初始化 i（当前结点索引）为上界
    let i = high  
    // 初始化 j 为 i 的父结点
    let j = Math.floor((i-1)/2)  
    // 当 j 不逾越下界时，重复向上对比+交换的过程
    while(j>=low)  {
        // 若当前结点比父结点大
        if(heap[j]<heap[i]) {
            // 交换当前结点与父结点，保持父结点是较大的一个
            const temp = heap[j] 
            heap[j] = heap[i]  
            heap[i] = temp
            
            // i更新为被交换父结点的位置
            i=j   
            // j更新为父结点的父结点
            j=Math.floor((i-1)/2)  
        } else {
            break
        }
    }
}