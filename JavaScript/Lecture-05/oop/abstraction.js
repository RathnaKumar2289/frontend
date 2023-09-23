class Human{

    #moveHand(direction){
        console.log("Moving Hand ",direction);
    }

    #moveLeg(direction){
        console.log("Moving Leg ",direction);
    }

    walk(){
        this.#moveHand("left");
        this.#moveHand("right");
    }

    dance(){
        this.#moveHand("left");
        this.#moveHand("right");
        this.#moveLeg("left");
        this.#moveLeg("right");
    }
}

const person1 = new Human();
person1.dance();
//person1.moveHand("left"); - TypeError: person1.moveHand is not a function