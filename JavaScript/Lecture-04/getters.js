class Human{
    name = "";
    #age = 0;
    #money = 0;

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    get money(){
        return this.#money;
    }

    get age() {
        return this.#age;
      }

      set personage(age){
        if(age<0){
            console.log("Age cannot be negative");
        }else{
            this.#age = age;
        }
      }
}

const person = new Human("Anuj",29);
person.age = 30;
person.money = 1000;
console.log(person.age);
console.log(person.money)