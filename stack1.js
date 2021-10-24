// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

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


const leftToRight={
    '(':')',
    '[':']',
    '{':'}'
}
const isValid=function(s){
    if(s==='') {
        return true
    }

    const stack=[]
    const len=s.length
    for(let i=0;i<len;i++){
        const ch=s[i]
        if(ch === '(' || ch==='[' || ch === '{'){
            stack.push(leftToRight(ch))
        }else{
            if(!stack.length || stack.pop()!==ch){
                return false
            }
        }
    }
    return !stack.length

}



// 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数



const dailyTempratures=function(T){
    const len=T.length
    const stack=[]
    const res=new Array(len).fill(0)
    for(let i=0;i<len;i++){
        while(stack.length && T[i]>T[stack[stack.length-1]]){
            const top=stack.pop()
            res[top]=i - top
        }
        stack.push(i)
    }
    return res
}



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
// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); --> 返回 -3.
// minStack.pop();
// minStack.top(); --> 返回 0.
// minStack.getMin(); --> 返回 -2.



/**
 * 初始化你的栈结构
 */
 const MinStack = function() {
    this.stack = []
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  // 栈的入栈操作，其实就是数组的 push 方法
  MinStack.prototype.push = function(x) {
    this.stack.push(x)
  };
  
  /**
   * @return {void}
   */
  // 栈的入栈操作，其实就是数组的 pop 方法
  MinStack.prototype.pop = function() {
    this.stack.pop()
  };
  
  /**
   * @return {number}
   */
  // 取栈顶元素，咱们教过的哈，这里我本能地给它一个边界条件判断（其实不给也能通过，但是多做不错哈）
  MinStack.prototype.top = function() {
    if(!this.stack || !this.stack.length) {
        return 
    }
    return this.stack[this.stack.length - 1]
  };
  
  /**
   * @return {number}
   */
  // 按照一次遍历的思路取最小值
  MinStack.prototype.getMin = function() {
      let minValue = Infinity  
      const  { stack } = this
      for(let i=0; i<stack.length;i++) {
          if(stack[i] < minValue) {
              minValue = stack[i]
          }
      }
      return minValue
  }





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





