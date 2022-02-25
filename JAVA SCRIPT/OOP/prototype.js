// INHERITANCE

// var baleno={
//     manufacture:"nexa",
//     price:10,
//     varient:["manuel"],
//     Color:["red","blue"],
//     break:"abs",

// }


// var glanza={
//     manufacture:"toyoto",
//     price:12,

// }
// glanza.__proto__=baleno
// console.log(glanza.manufacture);
// console.log(glanza.varient);



var language={
    name:"javascript",
    type:"interpreted",
    version:"ES10"
}

var framework={                                                    
    name:"express"
}

framework.__proto__=language
console.log(framework.version);
console.log(framework.name);
console.log(framework.type);