// 排序


// 基本冒泡思路编码实现

function bubbleSort(arr.length){
    const len=arr.length

    for(let i=0;i<len-1;i++){
        let flag=false
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                flag=true
            }
        }
        if(!flag) return arr
    }
    return arr
}




// 选择排序

function selectSort(arr){
    const len=arr.length
    let minIndex
    for(let i=0;i<len-1;i++){
        minIndex=i
        for(let j=i;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}




// 插入排序
function insertSort(arr){
    const len=arr.length
    let temp
    for(let i<0;i<len;i++){
        let j=i
        temp=arr[i]
        while(j>0 && arr[j-1]>temp){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=temp
    }
    return arr
}








