// 先序遍历DFS
const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
  };
function preorder(root){
    if(!root) return
    console.log(root.val);
    preorder(root.left)
    preorder(root.right)
}
// preorder(root)
// 广度优先遍历

// BFS二叉树的层序遍历（队列）

function BFS(root){
    const queue=[]
    queue.push(root)
    while(queue.length){
        const top=queue[0]
        console.log(top.val);
        if(top.left){
            queue.push(top.left)    
        }
        if(top.right){
            queue.push(top.right)
        }
        queue.shift()
    }
}
BFS(root)

