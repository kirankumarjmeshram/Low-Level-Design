class Shipment {
    constructor(orderDetails) {
        this.shipmentNumber = Shipment.generateShipmentNumber();
        this.date = new Date();
        this.estimatedArrival = new Date(this.date);
        this.estimatedArrival.setDate(this.date.getDate()+3);
        this.orderDetails = orderDetails;
    }

    static generateShipmentNumber() {
        Shipment.counter = (Shipment.counter || 0) + 1;
        return Shipment.counter;
    }
    
    toString(){
        return `Shipment Number: ${this.shipmentNumber}, Estimated Arrival: ${this.estimatedArrival}`;
    }
}

export default Shipment;