class Ticket {
    static idCounter = 0
    constructor(vehicle, parkingSpot) {
        this.id = ++Ticket.idCounter;
        this.vehicleRegistrationNumber = vehicle.getVehicalNumber();
        this.parkingSpot = parkingSpot;
        this.arrivalTime  = Date.now();
    }

    getId(){
        return this.id;
    }

    getArrivalTime(){
        return this.arrivalTime;
    }

    toString() {
        return `Ticket: ${this.id}, Vehicle: ${this.vehicleRegistrationNumber}, spot:${this.parkingSpot}, Arrival Time: ${this.arrivalTime}`;
    }
}

module.exports = Ticket;