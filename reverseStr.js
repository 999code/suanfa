function reverseStr(str){
    const len=str.length;
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-i-1]){
            return false
        }
        console.log(i);
    }
    // return true
}


console.log(reverseStr('aabbccbaa'));


// function forTest(){

//     for(let i=0;i<9;i++){
//         if(i===5){
//             // continue
//             return
//         }
//         console.log((i));
//     }

// }

// console.log(forTest());