class Hosteler{

    constructor(name,money){
        this.name = name;
        this.money = money;
    }

    party(){
        if(this.money>=100){           
            this.money = this.money-100;
            console.log("Party");
        }else{
            console.log("No Party");
        }
    }

    borrowMoney(hosteler,borrowMoney){
        if(hosteler.money>=borrowMoney){
            this.money = this.money+borrowMoney;
            hosteler.money = hosteler.money - borrowMoney;
        }else{
            console.log("Sorry, out of Money");
        }
    }
}

const ravi = new Hosteler("Ravi", 300);
ravi.party();
ravi.party();
ravi.party();
ravi.party();

const anuj = new Hosteler("Anuj", 500);

ravi.borrowMoney(anuj,200);
console.log(ravi.money);
console.log(anuj.money);

ravi.party();
