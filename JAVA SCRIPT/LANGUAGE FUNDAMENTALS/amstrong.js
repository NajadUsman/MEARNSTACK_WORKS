var num=153
var sum=0
var temp=num
var reminder
while(temp>0)
{
    reminder=temp%10
    sum+=reminder*reminder*reminder
    temp=Math.floor(temp/10)

}
    if(sum==num)
        console.log(`${num} is an amstrong number`);
    else
        console.log(`${num} is not an amstrong number`);