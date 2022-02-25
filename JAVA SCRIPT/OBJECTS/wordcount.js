var text="hello hai hello hai"

// var words=text.split(" ")
// // console.log(words);
// var wordsCount={}
// for(let word of words)
// {
//     if(word in wordsCount)
//     {
//         wordsCount[word]+=1

//     }
//     else{
//         wordsCount[word]=1
//     }
// }
// console.log(wordsCount);


var wordsCount={}

text.split(" ").map(word=>word in wordsCount?wordsCount[word]+=1:wordsCount[word]=1)
console.log(wordsCount);
