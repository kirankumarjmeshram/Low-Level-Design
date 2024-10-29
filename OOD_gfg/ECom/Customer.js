import User from "./User.js";
import Order from './Order.js'
import OrderStatus from "./OrderStatus.js";
import Cart from "./Cart.js";

class Customer extends User{
    constructor(name,phone, address){
        super(name,phone);
        this.cart = new Cart();
        this.orderHistory = [];
        this.address = this.address
    }

    addItemToCart(item) {
        this.cart.addItem(item);
    }

    getAddress(){
        return this.address;
    }


    removeItemFromCart(item) {
        this.cart.removeItem(item);
    }

    printCartItems() {
        console.log(this.cart.getItemList());
    }

    updateItemCount(item, newQuantity) {
        this.cart.updateItemCount(item, newQuantity);
    }
    placeOrder() {
        let currentOrder = new Order();
        currentOrder.setOrderStatus(OrderStatus.UNSHIPPED);
        currentOrder.setItem(this.cart.getItemList());
        currentOrder.setShippingAddress(this.getAddress());
        this.cart.checkout();
        this.orderHistory.push(currentOrder);
        return currentOrder;
    }
    getOrderHistory() {
        return this.orderHistory;
    }
}

export default Customer;