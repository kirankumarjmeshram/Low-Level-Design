class Ticket {
    static idCounter = 0;
    constructor(owner, numberOfSeats, show) {
        this.id = ++Ticket.idCounter;
        this.owner = owner;
        this.numberOfSeats = numberOfSeats;
        this.show = show;
        this.bookingTime = new Date();
    }

    getTicketInfo() {
        return {
            id: this.id,
            owner: this.owner,
            numberOfSeats: this.numberOfSeats,
            show: this.show.movie.name,
            theater: this.show.theater.name,
            bookingTime: this.bookingTime,
        };
    }
}

module.exports = Ticket;