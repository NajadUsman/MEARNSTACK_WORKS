var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hideandseek",50,0],
    [103,"mom s",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,10],
]


// var isAvailable=products.some(p=>p[2]==10)
// console.log(isAvailable);

// var isStockAvailable=products.some(p=>p[3]>100)
// console.log(isStockAvailable);

// var costavialble=products.some(p=>p[2]>10 && p[2]<20)
// console.log(costavialble);

// var costAvailable=products.filter(p=>p[2]>=10 && p[2]<=20)
// console.log(costAvailable);

products.forEach(p=>console.log(p[1]))
products.forEach(p=>console.log(p[2]))
