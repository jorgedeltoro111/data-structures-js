class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    //Add the final
    enqueue(value){
        let newNode = new Node(value);
        let aux = this.tail;
        aux.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    //Come out the first element
    dequeue(){
        if(this.length > 0){
            this.head = this.head.next;
        }else{
            console.log('The Queue is empty!');
        }
    }
    //Return all queue
    get(){
        if(this.length > 0){    
            let newNode = this.head;
            while(newNode !== null){
                console.log(newNode.value);
                newNode = newNode.next;
            }
        }else{
            console.log('The Queue is empty!');
        }
    }
    //Return the first element in the queue
    peek(){
        if(this.length > 0){
            console.log(this.head.value);
        }else{
            console.log('The Queue is empty!');
        }
    }
}

let queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.dequeue();
queue.get();