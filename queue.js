// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

// 解释: 滑动窗口的位置


const maxSlidingWindow=function(nums,k){
    const len=nums.length
    const res=[]
    // 初始化双端队列
    const queue=[]
    for(let i=0;i<len;i++){
        // 当队尾元素小于当前元素时
        while(queue.length && nums[queue[queue.length-1]]<nums[i]){
            // 将队尾元素出栈直至队尾元素大于等于当前元素 
            queue.pop()
        }
        queue.push(i)
        while(queue.length && queue[0]<=i-k){
            queue.shift()
        }
        if(i>=k-1){
            res.push(num[queue[0]])
        }
    }
    return res
}



