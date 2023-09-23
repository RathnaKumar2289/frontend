class Actor{
alive = true;
name = "Actor";
static actors = [];
constructor(name){
this.name = name;
Actor.actors.push(this);
}
}

class Player extends Actor{
    killcount=0;
    constructor(name){
    super(name);
    }

    kill(actor){
        if(!actor.alive)
        {
            console.log("Already dead");
            return;
        }
       
        if(!this.alive){
            console.log("Your dead");
            return;
        }

        if (this === actor) {
            console.log("Suicide is not allowed");
            return;
          }

        actor.alive=false;
        if(actor instanceof Player || actor!==this){
            this.killcount++;
        }        
    }
}

class NPC extends Actor{
    constructor(name){
        super(name);
        }
}

const p1 = new Player("Player 1");
const p2 = new Player("Player 2");
const npc1 = new NPC("NPC1");
const npc2 = new NPC("NPC2");

p1.kill(p2);
p1.kill(npc1);

console.log(Actor.actors);