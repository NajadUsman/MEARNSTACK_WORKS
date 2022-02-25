function displayNum(num){
    result.value+=num
}
function clearBox(){
    result.value="";
}
function evaluateExpression(){
    let expr=result.value;
    let res=eval(expr)
    result.value=res
}
function backspace(){
    let curValue=result.value;
    result.value=curValue.slice(0,-1)
}