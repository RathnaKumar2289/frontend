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

var isValid = function(s) {
    const stack=new Stack();
    for(let i=0;i<s.length;i++){
       const ch = s[i];
       if(ch=='('||ch=='['||ch=='{'){
           stack.push(ch);
       }else{
         if(stack.isEmpty()){
           return false;
         }else if((stack.top()=='(' && ch==')')||
         (stack.top()=='[' && ch==']')||
         (stack.top()=='{' && ch=='}')){
           stack.pop();
         }else{
           return false;
         }
       }
    }
 
    return stack.isEmpty();
 };

 console.log(isValid('(){}[]'));
 console.log(isValid('(){}[]('));