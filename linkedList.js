class Node{
    constructor(value){
        this.value = value,
        this.pointer = null
    }
}
class List{
    constructor(value){
        this.head = {
            value: value,
            pointer: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let nodo = new Node(value); 
        this.tail.pointer = nodo;
        this.tail= nodo;
        this.length++;
    }

    getList(){
        let nodo = new Node();
        nodo = this.head;
        while(nodo.pointer !== null){
            console.log(nodo.value);
            nodo = nodo.pointer; 
        }
    }
}

let list = new List(5);
list.append(10);
list.append(15);
list.getList();
