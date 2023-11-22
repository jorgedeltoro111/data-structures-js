class Array{
    constructor(){
        this.data = {},
        this.length = 0;
    }

    thereAre(){
        if(this.length > 0){
            return true;
        }else{
            console.log('No hay elementos para eliminar');
            return false;
        }
    }

    push(value){//add at final element
        this.data[this.length] = value;
        this.length++;
    }


    pop(){//delete the last element
        if(this.thereAre()){
            delete this.data[this.length - 1];
            this.length--;
            console.log('Eliminado correctamente');
        }
    }

    get(){
        for(let i = 0; i < this.length; i++){
            console.log(this.data[i]);
        }
    }

    delete(index){
        if(this.thereAre()){
            for(let i = index - 1; i < this.length; i++){
                this.data[i] = this.data[i + 1];
            }
            this.length--;
            console.log('Eliminado correctamente');
        }
    }
}

const array = new Array();
array.push(5);
array.push(10);
array.pop();
