class MyDeque {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    addFront(x){
        this.stack1.push(x);
    }

    addRear(x){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.push(x);
        while(this.stack2.length>0){
            this.stack1.push(this.stack2.pop());
        }
    }

    removeFront(){
        return this.stack1.pop();
    }

    removeRear(){
        return this.stack1.shift();
    }

    isEmpty(){
        return this.stack1.length == 0;
    }

}
