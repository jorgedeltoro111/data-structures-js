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

    printTree(node = this.root, level = 0, prefix = "Root: ") {
        if (node !== null) {
            console.log("  ".repeat(level) + prefix + node.value);
            this.printTree(node.left, level + 1, "L: ");
            this.printTree(node.right, level + 1, "R: ");
        }
    }

    display() {
        this.printTree();
    }

    search(value){
        let aux = this.root;
        if(this.length > 0){
            while(aux !== null){
                if(aux.value === value){
                    if(aux.left !== null){
                        console.log(`The node is ${aux.value} and has a children in the left part: ${aux.left.value}`);
                    }
                    if(aux.right !== null){
                        console.log(`The node is ${aux.value} and has a children in the right part: ${aux.right.value}`);
                    }
                    if(aux.left === null && aux.right === null){
                        console.log(`The node is ${aux.value} and doesnt have children.`);
                    }
                    return;
                }else if(value > aux.value){
                    aux = aux.right;
                }else{
                    aux = aux.left;
                }
            }
            console.log('The value does not exist!');
        }else{
            console.log('The binary tree is empty!');
        }
    }

    delete(value){
        let aux = this.root;
        let last;
        if(this.length > 0){
            while(aux !== null){
                if(aux.value === value){
                    if(aux.right === null && aux.left === null){//dont have children
                        if(aux.value > last.value){
                            last.right = null;
                        }else{
                            last.left = null;
                        }
                        return;
                    }else if(aux.right !== null && aux.left === null){//only one children right
                        let next = aux.right;
                        if(aux.value > last.value){
                            last.right = next;
                        }else{
                            last.left = next;
                        }
                        return;
                    }else if(aux.left !== null && aux.right === null){//only one children left
                        let next = aux.left;
                        if(aux.value > last.value){
                            last.right = next;
                        }else{
                            last.left = next;
                        }
                        return;
                    }else{//There are 2 children
                        
                        return;
                    }
                }else if(value > aux.value){
                    last = aux;
                    aux = aux.right;
                }else{
                    last = aux;
                    aux = aux.left;
                }
            }
            console.log('The value does not exist!');
        }else{
            console.log('The binary tree is empty!');
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(12);
tree.insert(11);
tree.insert(13);
tree.search(12);