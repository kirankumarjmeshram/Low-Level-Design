const Ticket = require("./Ticket");
class AutomatedSystem {
    constructor(parkingLot) {
        this.parkingLot = parkingLot; 
    }

    fetchAvailableSpot() {
        return this.parkingLot.getAvailableSpot(); // Access the parkingLot method
    }


    generateTicket(customer) {
        const availableSpot = this.fetchAvailableSpot();
        const vehicle = customer.getVehicle();
        const ticket = new Ticket(vehicle, availableSpot);
        return ticket;
    }

    calculateCharges(ticketId) {
        const ticket = this.parkingLot.currentTickets.get(ticketId);
        if (!ticket) {
            console.log("Invalid ticket ID.");
            return null;
        }
        const duration = (Date.now() - ticket.getArrivalTime()) / (1000 * 60 * 60); // Convert milliseconds to hours
        const charges = duration * this.parkingLot.parkingCharges;
        return charges.toFixed(2); // Return charges rounded to 2 decimal places
    }
}

module.exports = AutomatedSystem;
