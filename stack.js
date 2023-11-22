class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        this.top = {
            value: value,
            next: null
        },
        this.length = 1;
    }

    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    getStack(){
        if(this.isEmpty()){
            let newNode = new Node(0);
            newNode = this.top;
            while(newNode !== null){
                console.log(newNode.value);
                newNode = newNode.next;
            }
        }
    }

    pop(){
        if(this.isEmpty()){
            this.top = this.top.next;
            this.length--;
        }
    }

    isEmpty(){
        if(this.length === 0){
            console.log('The stack is empty!');
            return false;
        }else{
            return true;
        }
    }
}
let stack = new Stack(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.getStack();