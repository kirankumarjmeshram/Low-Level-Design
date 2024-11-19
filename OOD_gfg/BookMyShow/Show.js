const Ticket = require("./Ticket");

class show {
  static idCounter = 0;
  constructor(showTime, movie, theater) {
    this.id = ++show.idCounter;
    this.movie = movie;
    this.showTime = showTime;
    this.theater = theater;
    this.availableSeats = theater.capacity;
    theater.addShow(this);
  }

  bookTicket(user, seats) {
    if(seats > 0 && this.availableSeats >= seats) {
        this.availableSeats -= seats;
        const ticket = new Ticket(user.name, seats, this);
        user.addBooking(ticket);
        return ticket;
    }
    console.log("No seats available");
    return null;
    }

}

module.exports = show;