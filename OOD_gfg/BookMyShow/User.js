class User {
    static idCounter = 0;
    constructor(name) {
        this.id = ++User.idCounter;
        this.name = name;
    }
}

class GuestUser extends User {
    constructor(name) {
        super(name);
    }

    addBooking(ticket) {
        // Guest users may not maintain bookings
        console.log("Guest users cannot save bookings.");
    }
}

class RegisteredUser extends User {
    constructor(name) {
        super(name);
        this.bookingHistory = [];
    }

    addBooking(ticket) {
        this.bookingHistory.push(ticket);
    }

    getBookings() {
        return this.bookings; // Return all bookings
    }
}

module.exports = { User, GuestUser, RegisteredUser };
