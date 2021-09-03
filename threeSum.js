// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
const nums = [-1, 0, 1, 2, -1, -4]

// function threeSum(nums){
//     nums.sort((a,b)=>{
//         return a-b
//     })
//     const res=[];
//     const len=nums.length
//     for(var i=0;i<len-2;i++){
//         let j=i+1;//左指针
//         let k=len-1;
//         if(i>0 && nums[i]===nums[i-1])
//         while(j<k){
//             if(nums[i]+nums[j]+nums[k]<0){
//                 j++
//                 if(j<k && nums[j]===nums[j-1]){
//                     j++
//                 }
//             }else if(nums[i]+nums[j]+nums[k]>0){
//                 k--
//                 if(j<k && nums[k]===nums[k+1]){
//                     k--
//                 }
//             }else{
//                 res.push([nums[i],nums[j],nums[k]]);
//                 j++;
//                 k--;
//                 if(j<k && nums[j]===nums[j-1]){
//                     j++
//                 }
//                 if(j<k && nums[k]===nums[k-1]){
//                     k--;
//                 }
//             }
//         }
//     }
//     return res
// }


console.log(threeSum(nums));

function threeSum(nums){
    const len=nums.length;
    const res=[]
    nums.sort((a,b)=>{
        return a-b
    })

    for(let i=0;i<len-2;i++){
        let j=i+1;//左指针
        let k=len-1//右指针
        while(j<k){
            if(nums[i]+nums[j]+nums[k]<0){
                j++;
                while(j<k && nums[j]===nums[j-1]){
                    j++
                }
            }else if(nums[i]+nums[j]+nums[k]>0){
                k--
                while(j<k && nums[k]===nums[k+1]){
                    k--
                }
            }else{
                res.push([nums[i],nums[j],nums[k]])
                j++
                k--
                while(j<k && nums[j]===nums[j-1]){
                    j++
                }
                while(j<k && nums[k]===nums[k+1]){
                    k--
                }
            }
        }
    }
    return res;
}
