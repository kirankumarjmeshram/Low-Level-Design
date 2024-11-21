const ParkingSpot = require('./ParkingSpot');

class ParkingLot {
    constructor(name, capacity, address, parkingCharges, automatedSystem, displayBoard) {
        this.name = name;
        this.capacity = capacity;
        this.address = address;
        this.parkingCharges = parkingCharges;
        this.automatedSystem = automatedSystem;
        this.displayBoard = displayBoard;
        this.currentTickets = new Map();
        this.parkingSpots = new Array(capacity).fill(null).map((_, index) => new ParkingSpot(`Spot${index + 1}`));
    }

    getAvailableSpot() {
        const availableSpot = this.parkingSpots.find(spot => spot.isAvailable());
        if (availableSpot) {
            availableSpot.occupy(); // Mark the spot as occupied
        }
        return availableSpot;
    }

    releaseSpot(spotNumber) {
        const spot = this.parkingSpots.find(spot => spot.getSpotNumber() === spotNumber);
        if (spot) {
            spot.release();
        }
    }

    getAvailability() {
        return this.parkingSpots.filter(spot => spot.isAvailable()).length;
    }

    setAdmin(admin) {
        this.admin = admin;
    }
}

module.exports = ParkingLot;