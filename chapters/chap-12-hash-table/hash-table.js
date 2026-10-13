class HashTable{
    constructor(){
        this.table = new Array(255); 
    }

    // add something to memory
    add(input){
        this.table[this.hash(input,255)] = input
    }

    // check if something exists in memory
    check(input){
        return !!this.table[this.hash(input,255)]
    }

    //hash function that hashes the input
    hash(input,max){
        let total = 0;
        for(let i = 0; i < input.length; i++){
            total += input.charCodeAt(i)
        }
        return total % max

    }
}

hash = new HashTable()
hash.add('hello')
console.log(hash.check('hello'))
console.log(hash.hash('hello',255))

