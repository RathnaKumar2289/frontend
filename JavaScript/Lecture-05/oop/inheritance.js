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
}

const h1 = new Human();
console.log(h1.legs);