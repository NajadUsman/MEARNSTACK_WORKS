 var products = [
  {
    pid: 100,
    p_name: "samsungA52",
    band: "5g",
    price: 30000,
    display: "amoled",
  },
  {
    pid: 101,
    p_name: "samsungf41",
    band: "4g",
    price: 15000,
    display: "amoled",
  },
  {
    pid: 102,
    p_name: "mi10promax",
    band: "4g",
    price: 19000,
    display: "amoled",
  },
  {
    pid: 103,
    p_name: "mi11lite",
    band: "5g",
    price: 22000,
    display: "led",
  },
  {
    pid: 104,
    p_name: "iphone12pro",
    band: "5g",
    price: 80000,
    display: "amoled",
  },
  {
    pid: 105,
    p_name: "realme",
    band: "4g",
    price: 12000,
    display: "led",
  },
]

// # print product names only"

// products.map(record=>record["p_name"]).forEach(record=>console.log(record))

products.forEach(p=>console.log(p.p_name))


// # print all mobile details whose display="amoled"

// products.filter(record=>record["display"]=="amoled").forEach(record=>console.log(record))
products.filter(record=>record.display=="amoled").forEach(record=>console.log(record))


// # print 5g moboile names

// products.filter(record=>record["band"]=="5g").forEach(record=>console.log(record.p_name))
products.filter(record=>recor.band=="5g").forEach(record=>console.log(record.p_name))

    

// # filter mobiles based on price

// products.sort((p1,p2)=>p1["price"]-p2["price"]).forEach(result=>console.log(result))
products.sort((p1,p2)=>p1.price-p2.price).forEach(result=>console.log(result))

// # print costly mobile

// var costlyMobile=products.reduce((p1,p2)=>p1["price"]>p2["price"]?p1:p2)
// console.log(costlyMobile.p_name);

var costlyMobile=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
console.log(costlyMobile.p_name);

// # print low cost mobile


// var lowCostlyMobile=products.reduce((p1,p2)=>p1["price"]<p2["price"]?p1:p2)
// console.log(lowCostlyMobile.p_name)

var lowCostlyMobile=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
console.log(lowCostlyMobile.p_name)