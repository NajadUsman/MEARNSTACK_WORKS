var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"eranakulam",weather:35},
    {districtname:"kottayam",weather:33},
    {districtname:"idukki",weather:18},
    {districtname:"thrissur",weather:34},
    {districtname:"eranakulam",weather:30},
    {districtname:"kottayam",weather:30},
    {districtname:"idukki",weather:20},
]

var highestWeather={}
for(let record of data)
{
    let districtName=record["districtname"]
    let curTemp=record["weather"]
    if(districtName in highestWeather)
    {
        let oldTemp=highestWeather[districtName]
        if(curTemp>oldTemp)
        {
            highestWeather[districtName]=curTemp
        }

    }
    else{
        highestWeather[districtName]=curTemp
    }
}
// console.log(highestWeather);
console.log(Object.entries(highestWeather).sort((r1,r2)=>r2[1]-r1[1]))
