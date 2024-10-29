import OrderStatus from "./OrderStatus.js";
import OrderLog from "./OrderLog.js";
import Shipment from "./Shipment.js";


let orderCounter = 0;

class Order {
    constructor() {
        this.orderNumber = ++orderCounter;
        this.OrderStatus = OrderStatus.CREATED;
        this.OrderLog = [new OrderLog(new Date(), OrderStatus.CREATED)]
    }

    setOrderStatus(OrderStatus) {
        this.OrderStatus = OrderStatus;
        this.OrderLog.push(new OrderLog(new Date(), OrderStatus));
    }

    setItem(item){
        this.item = item;
    }

    setShippingAddress(address) {
        this.shippingAddress = address;
    }

    moveToShipping(){
        this.setOrderStatus(OrderStatus.SHIPPED);
        return new Shipment(this)//
    }

    toString() {
        return `Order Number: ${this.orderNumber}, Status: ${this.OrderStatus}`;
    }
}

export default Order;