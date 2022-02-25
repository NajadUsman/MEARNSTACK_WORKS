var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]





  //  q1  total number accounts

// console.log(accounts.length);

   
//q2  print all account numbers whose ac-type savings

// accounts.filter(data=>data.ac_type=="savings").forEach(p=>console.log(p.acno))

//q3 print balance of acno=1000

// var balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);



//q4 print all phone-pay transaction details


// var phonePayTs= accounts.map(data=>data.transactions).flat().filter(ts=>ts.method=="phone-pay")
// console.log(phonePayTs);

//print all transaction whose transaction amount>500

// var allTs= accounts.map(data=>data.transactions).flat().filter(ts=>ts.amount>500)
// console.log(allTs)


//q6 print credit transcation's of 1002

// var credTra=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(credTra);




//q5 print highest balance account details

// var highBalance=accounts.reduce((b1,b2)=>b1.balance>b2.balance?b1:b2)
// console.log(highBalance);


//q6 print transaction history of 1002

var credHistory=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
// console.log(credHistory);

var debHistory=accounts.filter(data=>data.acno==1002).map(data=>data.transactions).flat()
// console.log(debHistory); 

// Array.prototype.push.apply(debHistory,credHistory)
// console.log(debHistory);

var transHistory=[...debHistory,...credHistory]
console.log(transHistory);
