var num=423
var lastDigit=0
var str=""

while(num!=0){

lastDigit=num%10
str+=lastDigit
num=Math.floor(num/10)
}
console.log(str);


//