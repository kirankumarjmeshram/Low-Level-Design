class ParkingSpot {
    constructor(spotNumber) {
        this.spotNumber = spotNumber;
        this.isOccupied = false;
    }

    getSpotNumber() {
        return this.spotNumber;
    }

    isAvailable() {
        return !this.isOccupied;
    }

    occupy() {
        this.isOccupied = true;
    }

    release() {
        this.isOccupied = false;
    }
}

module.exports = ParkingSpot;
