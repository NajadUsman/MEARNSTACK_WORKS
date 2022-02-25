// var arr=[2,3,4,5]
// var sum=9
// count=1

// for(let i of arr)
// {
//     for(let j of arr)
//     {
//          count++
//         if((i+j)==sum)
//         {
//             console.log(`${i},${j}`,"pairs")
//             break
//         }
//     }
// }
// console.log("iteration", count);

var arr=[2,3,4,5]
arr.sort((n1,n2)=>n1-n2)

var pairNum=7
var pairs=[];
var low=0, upp=arr.length-1
var flag=0
while(low<upp)
{
    let currSum=arr[low]+arr[upp]
    if(currSum==pairNum)
    {
        flag=1
        console.log(`pairs(${arr[low]},${arr[upp]})`);
        pairs.push((arr[low],arr[upp]))
        low++;
    }
    else if(currSum<pairNum)
    {
        low++
    }
    else if(currSum>pairNum)
    {
        upp--
    }
}
if(flag==0)
{
    console.log("no pairs found");
}
console.log(pairs);