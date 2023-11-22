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
        while(nodo !== null){
            console.log(nodo.value);
            nodo = nodo.pointer; 
        }
    }

    prepend(value){
        const newNodo = new Node(value);
        newNodo.pointer = this.head;
        this.head = newNodo;
        this.length++;
    }

    insert(value, index){
        const newNode = new Node(value);
        let aux = this.head;
        while(aux !== null){
            if(aux.value === index){
                newNode.pointer = aux.pointer;
                aux.pointer = newNode;
                this.length++;
                if(aux.value === this.tail.value){
                    this.tail = newNode;
                }    
                return;
            }
            aux = aux.pointer;
        }
        console.log('Indice no encontrado');
    }
}

let list = new List(5);
list.append(10);
list.append(15);
list.append(25);
list.insert(100, 15);
list.getList();
