const nums=[2,7,11,15],target=9;

function getIndex(nums,target){
    const mapobj=new Map();
    for(var i=0;i<nums.length;i++){
        if(mapobj.has(target-nums[i])){
            return [mapobj.get(target-nums[i]),i]
        }else{
            mapobj.set(nums[i],i)
        }
    }
    return[]
}
getIndex(nums,target)
console.log(getIndex(nums,target));
