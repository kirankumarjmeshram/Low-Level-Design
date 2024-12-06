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
        const cartItem = this.itemList.find(i => i.product === item.product);
        if (cartItem) {
            // item will have count 
            cartItem.count = newCount;
        }
    }

    getItemList() {
        return this.itemList;
    }

    checkout() {
        this.itemList = [];
    }
}

export default Cart;