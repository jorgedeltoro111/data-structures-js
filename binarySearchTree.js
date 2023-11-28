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
                    console.log('The value exist!');
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

    
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);
tree.insert(11);
tree.insert(14);
tree.search(8);