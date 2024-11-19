class TicketBookingThread {
    constructor(show, user, seats) {
        this.show = show;
        this.user = user;
        this.seats = seats;
        this.ticket = null;
    }

    run() {
        this.ticket = this.show.bookTicket(this.user, this.seats);
    }

    getTicket() {
        return this.ticket;
    }
}

module.exports = TicketBookingThread;