class Stack{

    #items = [];
    constructor(){
        this.#items =[];
    }
    push(item){
        this.#items.push(item);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty");
        }

      return  this.#items.pop();
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty");
        }
        return this.#items[this.#items.length-1];
    }

    isEmpty(){
        return this.#items.length === 0;
    }

    print(){
        console.log(this.#items.toString());
    }
}

const stk = new Stack();
stk.push(1);
stk.push(2);
console.log(stk.top());
stk.pop();
stk.print(); 
