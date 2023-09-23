class Engine{
    start(){
        console.log("Starting engine");
    }

    stop(){
        console.log("Stopping engine");
    }
}

class NitroEngine extends Engine{
    start(){
        console.log("Starting Nitro engine");
    }

    stop(){
        console.log("Stopping Nitro engine");
    }
}

class Break{
    apply(){
        console.log("Applying Break");
    }
}

class Car{
    #break;
    #engine;
    constructor(){
        this.#break = new Break();
        this.#engine = new Engine();
    }

    start() {
        console.log("Starting car");
        this.#engine.start();
      }
    
      stop() {
        console.log("Stopping car");
        this.#break.apply();
        this.#engine.stop();
        console.log("Car stopped");
      }
    
      break() {
        console.log("Applying break");
        this.#break.apply();
      }
}

const car = new Car();
car.start();
car.stop();