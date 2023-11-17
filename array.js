class Array{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(){
        console.log(this.data);
    }

    push(item){
        this.data[this.length] = item;
        this.length++;

        console.log(`${item} fue agregado correctamente`);
    }

    pop(){
        let ultimo = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;

        console.log(`${ultimo} fue eliminado correctamente`);
    }

    delete(index){
        if(index <= this.length){        
            for(let i = index; i < this.length; i++){
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1];
            this.length--;
            console.log(this.data[index] + ' Eliminado');
       }else{
        console.log('El elemento no existe');
       }
    }
}

let array = new Array()

array.push('Jorge');
array.get();
array.push('Alberto');
array.get();
array.push('Gera');
array.get();
array.push('Pepe');
array.get();
array.pop();
array.get();
array.delete(0);
array.get();
