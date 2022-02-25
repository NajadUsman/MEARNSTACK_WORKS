// let str=""
// for(let row=1;row<=6;row++)
// {
//     for(let space=0;space<=6-row;space++)
//     {
//         str+=" ";
//     }
//     for(let col=0;col<2*row-1;col++)
//     {
//         if(row===1||row===6)
//         {
//             str+="*"

//         }
//         else if( col===0|| col===2*row-2)
//         {
//             str+="*"
//         }
//         else{
//             str+=" "
//         }
//     }

//     str+="\n"
// }
// console.log(str);

for(let row=1;row<=4;row++)
{
    let str=""
    for(let col=1;col<=7;col++)
    {
        if(row==4||row+col==5||col-row==3)
    
        str+="*"

    else
        str+=" "

    }
    
    
    console.log(str);
}
