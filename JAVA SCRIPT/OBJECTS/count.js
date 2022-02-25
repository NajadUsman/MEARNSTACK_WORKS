var arr=[10,10,20,20,30,30,40,40,50,50,50]
wordsCount={}

// for(let num of arr)
// {
//     if(num in wordsCount)
//     {
//         wordsCount[num]+=1
//     }
//     else{
//         wordsCount[num]=1
//     }
// }
// console.log(wordsCount);

arr.map(num=>num in wordsCount? wordsCount[num]+=1:wordsCount[num]=1)
console.log(wordsCount);