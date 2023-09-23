class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log("Hello from", this.name);
    }

    canVote() {
        return this.age >= 18;
    }

    party() {
        if(this.rich){
            console.log("Party all night long!");
        } else {
            console.log("Damn it");
        }
    }
}

const person1 = new Human("Alice", 25);
person1.sayHello(); // Outputs: Hello from Alice
console.log(person1.canVote()); // Outputs: true

const person2 = new Human("Bob", 16);
person2.sayHello(); // Outputs: Hello from Bob
console.log(person2.canVote()); // Outputs: false

// To use the party() method, you need to set the "rich" property first:
person1.rich = true;
person1.party(); // Outputs: Party all night long!