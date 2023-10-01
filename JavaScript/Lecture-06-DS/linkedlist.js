class Node{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    insertLast(value){        
        let temp = this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        const node = new Node(value);
        temp.next = node;
    }

    #nodeAt(index){
        let temp = this.head;
       for(let i=0;i<index;i++){
            if(temp===null) throw Error("Index out of Bound"+index);
            temp = temp.next;
       }
       return temp;
    }

    valueAt(index){
        return this.#nodeAt(index);
    }

    insertAt(index,value){
        if(index===0){
            this.insertFirst(value);
        }
       const previousNode = this.valueAt(index-1);
      const nextNode = previousNode.next;
      const node = new Node(value);
      previousNode.next = node;
      node.next = nextNode;
    }

    print(){
        let temp = this.head;
        while(temp!=null){            
            console.log(temp.value);
            temp=temp.next;
        }
    }

    reverse(){
        console.log("After reverse")
        let present = this.head;
        let previous = null;
        while(present!=null){
            let temp = present.next;
            present.next = previous;
            previous = present;
            present = temp;
        }
        this.head=previous;
    }
}

const linkedList = new LinkedList();
linkedList.insertFirst(1);
linkedList.insertFirst(0);
linkedList.insertLast(2);
linkedList.insertAt(1,4);

linkedList.print();
linkedList.reverse();
linkedList.print();
