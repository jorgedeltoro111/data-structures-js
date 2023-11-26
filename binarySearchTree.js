class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
        this.length = 0;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.root = newNode;
            this.length++;
        }else{
            let aux = this.root;
            while(aux !== null){
                if(value > aux.value){
                    if(aux.right === null){
                        aux.right = newNode;
                        this.length++;
                        return;
                    }
                    aux = aux.right;
                }else{
                    if(aux.left === null){
                        aux.left = newNode;
                        this.length++;
                        return;
                    }
                    aux = aux.left;
                }
            }
        }
    }
}