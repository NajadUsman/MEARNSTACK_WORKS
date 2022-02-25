var luckyContext=new Promise((res,rej)=>{
    let lotNum=4
    let priceNum=Math.floor(Math.random()*10)
    if(priceNum==lotNum)
    {
        res("you won")
    }

})
luckyContext.then(data=>console.log("will buy a new car"))