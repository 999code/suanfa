// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例：

// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]



const permute=function(nums){
    // 缓存数组长度
    const len=nums.length
    // curr变量用来记录当前的排列内容
    const curr=[]
    // 用来记录所有的排列顺序
    const res=[]
    // visited防止重复访问同一个数字
    const visited={}
    // 定义dfs函数入参是坑位的suoyin
    function dfs(nth){
        if(nth===len){
            // 若递归到了不存在的坑位（第len+1个）则触碰递归的边界返回
            res.push(curr.slice())
            return
        }
        // 检查手里剩下的数字有哪些
        for(let i=0;i<len;i++){
            // 若nums[i]之前没有被其他元素用过则可以理解为这个元素被剩下了
            if(!visited[nums[i]]){
                // 给nums[i]打个标记已用过
                visited[nums[i]]=1
                // 将nums[i]推入当前排列
                curr.push(nums[i])
                
                //  基于这个排列继续往下一个坑走去
                dfs[nth+1]
                // num[i]让出当前坑位
                curr.pop()
                // 下掉已用过的标识
                visited[nums[i]]=0

            }
        }
    }

}