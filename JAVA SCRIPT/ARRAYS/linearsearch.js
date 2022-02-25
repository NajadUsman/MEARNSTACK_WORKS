var arr=[1,30,10,35,50,39,48]
var element=10

// linear search
var flag=0
var count=1
for(let item of arr)
{
    if(element==item)
    {
        flag=1
        break
    }
    count++
}
console.log(count);
 console.log(flag==1?`element found`:`element not found`);