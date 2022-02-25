var num=14
var fact=1

if(num<0)
    console.log(`factorial of negative number does not exist`)
while(num!=0)
{  
    fact*=num
    num--
}
    console.log(fact)
