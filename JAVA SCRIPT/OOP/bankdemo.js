class Bank{
    createAccount(acno,pName,pan,branch,phone,bal)
    {
        this.accountnumber=acno
        this.personame=pName
        this.pan=pan
        this.branch=branch
        this.phone=phone
        this.bal=bal

    }
    withDraw(amount)
    {
        if(amount>this.bal)
        {
        console.log(`transaction failed insufficient balance on your${this.accountnumber}`);
        }   
        else
        {
            this.bal=amount 
            console.log(`your accont ${this.accountnumber} has been debited with 
            amount ${amount} your available balance ${this.bal}`);
        }

    }
    deposite(amount)
    {
        this.bal+=amount
        console.log(`your accont ${this.accountnumber} has been credited with 
        amount ${amount} your available balance ${this.bal}`);
    }
    balanceEnqiury()
    {
        console.log(`your available balance= ${this.bal}`);
    }
}

var bank=new Bank()
bank.createAccount(1001,"najad",1234,"kozhikode",9048751881,20000)
bank.withDraw(1000)
bank.deposite(200000)
bank.balanceEnqiury()
