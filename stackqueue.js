// 题目描述：使用栈实现队列的下列操作：

// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。
// 示例:

// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.peek(); // 返回 1
// queue.pop(); // 返回 1
// queue.empty(); // 返回 false
// 说明:

// 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
// 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。



// 初始化构造函数
/**
 * 初始化构造函数
 */
 const MyQueue = function () {
    // 初始化两个栈
    this.stack1 = [];
    this.stack2 = [];
  };
  
  /**
  * Push element x to the back of queue.
  * @param {number} x
  * @return {void}
  */
  MyQueue.prototype.push = function (x) {
    // 直接调度数组的 push 方法
    this.stack1.push(x);
  };
  
  /**
  * Removes the element from in front of queue and returns that element.
  * @return {number}
  */
  MyQueue.prototype.pop = function () {
    // 假如 stack2 为空，需要将 stack1 的元素转移进来
    if (this.stack2.length <= 0) {
      // 当 stack1 不为空时，出栈
      while (this.stack1.length !== 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop());
      }
    }
    // 为了达到逆序的目的，我们只从 stack2 里出栈元素
    return this.stack2.pop();
  };
  
  /**
  * Get the front element.
  * @return {number}
  * 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
  */
  MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
      // 当 stack1 不为空时，出栈
      while (this.stack1.length != 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop());
      }
    }
    // 缓存 stack2 的长度
    const stack2Len = this.stack2.length;
    return stack2Len && this.stack2[stack2Len - 1];
  };
  
  /**
  * Returns whether the queue is empty.
  * @return {boolean}
  */
  MyQueue.prototype.empty = function () {
    // 若 stack1 和 stack2 均为空，那么队列空
    return !this.stack1.length && !this.stack2.length;
  };
  


// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

// 解释: 滑动窗口的位置

// [1 3 -1] -3 5 3 6 7

// 1 [3 -1 -3] 5 3 6 7
// 1 3 [-1 -3 5] 3 6 7
// 1 3 -1 [-3 5 3] 6 7
// 1 3 -1 -3 [5 3 6] 7
// 1 3 -1 -3 5 [3 6 7]
// 最大值分别对应：

// 3 3 5 5 6 7
// 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
// 大部分人解法
// const maxSlidingWindow=function(nums,k){
//     const len=nums.length
//     const res=[]
//     let left=0
//     let right=k-1
//     while(right<len){
//         res.push(Math.max(nums.slice(left,right)))
//         right++
//         left++
//     }
//     return res
// }

// 双端队列解法 考察目标解法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const maxSlidingWindow = function (nums, k) {
    // 缓存数组的长度
    const len = nums.length;
    // 初始化结果数组
    const res = [];
    // 初始化双端队列
    const deque = [];
    // 开始遍历数组
    for (let i = 0; i < len; i++) {
      // 当队尾元素小于当前元素时
      while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
        // 将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
        deque.pop();
      }
      // 入队当前元素索引（注意是索引）
      deque.push(i);
      // 当队头元素的索引已经被排除在滑动窗口之外时
      while (deque.length && deque[0] <= i - k) {
        // 将队头元素索引出队
        deque.shift();
      }
      // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
      if (i >= k - 1) {
        res.push(nums[deque[0]]);
      }
    }
    // 返回结果数组
    return res;
  };



//   题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
  };


const isValid=function(s){
    if(!s){
        return true
    }
    const stack=[]
    const len=s.length
    for(let i=0;i<len;i++){
        ch=s[i]
        if(ch==='(' || ch==='[' || ch==='{'){
            stack.push(leftToRight[ch])
        }else{
            if(!!stack.length && stack.pop()!==ch){
                return false
            }
        }
    }
    return !stack.length

}

// 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
/**
 * @param {number[]} T
 * @return {number[]}
 */
// 入参是温度数组
const dailyTemperatures = function(T) {
    const len = T.length // 缓存数组的长度 
    const stack = [] // 初始化一个栈   
    const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
    for(let i=0;i<len;i++) {
      // 若栈不为0，且存在打破递减趋势的温度值
      while(stack.length && T[i] > T[stack[stack.length-1]]) {
        // 将栈顶温度值对应的索引出栈
        const top = stack.pop()  
        // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
        res[top] = i - top 
      }
      // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
      stack.push(i)
    }
    // 返回结果数组
    return res 
}








// 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。

// pop()—— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。



// const MinStack=function(){
//     this.stack=[]
// }


// MinStack.prototype.push=function(x){
//     this.stack.push(x)
// }


// MinStack.prototype.pop=function(){
//     this.stack.pop()
// }


// MinStack.prototype.top=function(){
//     if(!this.stack || !this.stack.length) return
//     return this.stack[this.stack.length-1]
// }

// MinStack.prototype.getMin=function(){
//     let minValue=Infinity
//     const {stack}=this
//     for(let i=0;i<stack.length;i++){
//         if(minValue>stack[i]) minValue=stack[i]
//     }
//     return minValue
// }



// 更高效的做法


const MinStack=function(){
    this.stack=[]
    this.stack2=[]
}


MinStack.prototype.push=function(x){
    this.stack.push(x)
    if(this.stack2.length===0 || this.stack2[this.stack2.length-1]>=x){
        this.stack2.push(x)
    }
}
MinStack.prototype.pop=function(){
    if(this.stack.pop()===this.stack2[this.stack2.length-1]){
        this.stack2.pop()
    }
}

MinStack.prototype.top=function(){
    return this.stack[this.stack.length-1]
}
MinStack.prototype.getMin=function(){
    return this.stack2[this.stack2.length-1]
}










