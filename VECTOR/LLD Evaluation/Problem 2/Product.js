class Product {
    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getQuantity(){
        return this.quantity;
    }
    setQuantity(quantity){
        this.quantity = quantity;
    }
}

module.export = Product;