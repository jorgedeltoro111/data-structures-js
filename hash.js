class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value){
        const adress = this.hashMethod(key);
        if(!this.data[adress]){
            this.data[adress] = [];
        }else{
            this.data[adress].push([key, value]);
        }
        return this.data;
    }


}

const hashTable = new HashTable(50);
hashTable.set("Jorge", 2002);

