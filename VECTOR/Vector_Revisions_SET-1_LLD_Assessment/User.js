class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.bookings = [];
    }

    addBooking(booking) {
        this.bookings.push(booking);
    }

    viewBookings() {
        return this.bookings;
    }
}

module.exports = { User };