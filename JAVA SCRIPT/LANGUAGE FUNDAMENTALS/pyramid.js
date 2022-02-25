// let str=""
// for(let row=1;row<=6;row++)
// {
//     for(let space=0;space<=6-row;space++)
//     {
//         str+=" ";
//     }
//     for(let col=0;col<2*row-1;col++)
//     {
//         str+="*"
//     }
//     str+="\n"
// }
//     console.log(str);


    
// var row=5
//
// for(var i=1;i<=row;i++)
// {
//     for(k=1;k<=(row-i);k++)
//     {
//         str+=" "
//     }
//     for(j=1;j<=i;j++)
//     {
//         str+="* "
//     }
//     str+="\n"
// }
// console.log(str);

for(let row=1;row<=4;row++)
{
    let str=""
    for(let space=1;space<=(4-row);space++)
    {

        str+=" "
    }
    for(let col=1;col<=row;col++)
    {
        str+="* "
    }
    console.log(str);
}