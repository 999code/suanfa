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


