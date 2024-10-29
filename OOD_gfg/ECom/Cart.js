class Cart {
    constructor() {
        this.itemList = [];
    }

    addItem(item) {
        this.itemList.push(item);
    }

    removeItem(item) {
        this.itemList = this.itemList.filter(i => i !== item);
    }

    updateItemCount(item, newCount){
        item.updateCount(newCount);
    }

    getItemList() {
        return this.itemList;
    }

    checkout() {
        this.itemList = [];
    }
}

export default Cart;