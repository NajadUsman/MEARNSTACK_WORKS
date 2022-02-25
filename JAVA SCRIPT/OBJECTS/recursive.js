// FIND FIRST RECURSIVE CHARACTER


var pattern="ABBBCC"
var wc={}

for(let char of pattern)
{
    if(char in wc)
    {
        console.log(`${char},is the first recursive letter `);
        break
    }
    else{
        wc[char]=1
    }
}



