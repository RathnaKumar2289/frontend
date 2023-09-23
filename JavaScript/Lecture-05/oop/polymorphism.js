class Animal{
    legs= 4;
    eat(){
        console.log("eating...");
    }

    sleep(){
        console.log("sleeping...");
    }

    walk(){
        console.log("walking...");
    }
}

class Human extends Animal{
    legs = 2;
//Overriding is supported
    eat(){
        console.log("eating as human");
    }

//Overloading is not supported in JS
eat(food){
    console.log("eating food ",food);
}
}

const h1 = new Human();
h1.eat();