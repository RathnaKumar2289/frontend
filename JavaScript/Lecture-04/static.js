class Human{
    static population=0;
    constructor(name,dob){
        this.name = name;
        this.dob = dob;
        Human.population=Human.population+1;
    }
 
}

const person1 = new Human("Anuj",29);
const person2 = new Human("Kumar",32);

console.log(Human.population);