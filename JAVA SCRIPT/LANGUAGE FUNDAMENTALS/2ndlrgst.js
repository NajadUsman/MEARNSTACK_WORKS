var num1=80
var num2=90
var num3=70

if(num1>num2 && num1>num3)
 {   
    if(num2>num3) 
    console.log(`2 nd largest is num2`);
    else
     console.log(`2nd largest is num3`);
} 
else if(num2>num1 && num2>num3) 
{
    if(num1>num3) 
    console.log(`2nd largest is num1`);
    else
   console.log(`2nd larget is num3`);
} 
else if(num3>num1 && num3>num2) 
{
    if(num1>num2)
     console.log(`2nd largest is num1`);
    else 
    console.log(`2nd largest num is num2`);
}
else if(num1==num2 && num2==num3)
{
    console.log(`numbers are equal`);
}
// console.log(num1>=num2 && num1>=num3?num2>=num3?:`2 nd largest is num2`:`2nd largest is num3`:num2>=num1 && num2>=num3?num1>=num3?`2nd largest is num1`:`2nd larget is num3`:num3>=num1 && num3>=num2?num1>=num2?`2nd largest is num1`:`2nd largest num is num2`);