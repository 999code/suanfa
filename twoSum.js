// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
const twoSum=function(nums,target){
    const map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),1]
        }else{
            map.set(nums[i],i)
        }
    }
    return null
}

console.log(twoSum([2, 7, 11, 15],9));