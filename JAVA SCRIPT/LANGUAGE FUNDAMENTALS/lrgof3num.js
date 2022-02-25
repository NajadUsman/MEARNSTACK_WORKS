var num1=100
var num2=100
var num3=100

if(num1>num2 && num1>num3)
{
    console.log(`largest number is num1`);
}
else if(num2>num1 && num2>num3)
{
    console.log(`largest is num2`);
}
else if(num3>num1 &&  num3>num2)
{

    console.log(`largest is num3`);
}
else
    console.log(`3 num are equal`);

// console.log(num1>=num2 && num1>=num3?`largest is num1`: num2>=num1 && num2>=num3?`largest is num2`:`largest is num3`);