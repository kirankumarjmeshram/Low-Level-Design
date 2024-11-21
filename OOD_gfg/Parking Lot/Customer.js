const Vehicle = require('./Vehicle'); // Import the Vehicle class

class Customer {
    constructor(name, vehicleNumber) {
        this.name = name;
        this.vehicle = new Vehicle(vehicleNumber); // Associate a vehicle with the customer
    }

    getVehicle() {
        return this.vehicle; // Return the associated vehicle
    }
}

module.exports = Customer;
