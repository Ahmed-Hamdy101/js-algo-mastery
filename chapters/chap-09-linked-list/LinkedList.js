// Node class represents each element in the list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// LinkedList class to handle list operations
class LinkedList {
    constructor() {
        // Initialize the head of the list
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    // push node at the head
     push(value){
        // create new node
        const node = new Node(value);
        // assign value
        this.length++;
        // set value if not null
        if(!this.head){
            // initial tail
            this.tail = this.head = node;
        }else {
            // initial next like head -> tail as next
            this.tail.next= node;
        }
        return this.tail=node;
      }
    //  pop node by value
    pop(){
        return this.delete(this.length - 1);
    }

    // find
    _find(value , test=this._test){
        // traverse the list
        let current = this.head;
        // index
        let i = 0;
        // while current not null
        while(current){
            if(test(value, current.value, i,current)){
                return current;
            }
            current = current.next;
            i++;
        }
        // not found
        return null;
    }

    // get by index
    get(index){
        // find node
        const node = this._find(index, this._testIndex);
        // return value or null
        return node ? node.value : null;
    }

    // delete by value
    delete(index){
        if (index === 0){
            const head = this.head;
            if(head){
                this.head = head.next;
            }
            else {
                this.head= null
            }
            this.length--;
            return head ? head.value : null;
        }
        const node = this._find(index-1 ,this._testIndex);
        const excise = node.next;
        if(!excise) return null;
        if(!excise.next) this.tail = node;
        node.next = excise.next;
        this.length--;
        return excise.value;
    }


    // test
    _test(a,b){
        return (a === b);
    }
    // testIndex
    _testIndex(search,__,i){
        return search === i;
    }

    //reverse
     reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        this.tail = this.head;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }

}

const linkedList = new LinkedList();

console.log(linkedList.push(10));
console.log(linkedList.push(20));
console.log(linkedList.push(30));
console.log(linkedList.get(1));