const { Language, Genre } = require('./Enums');
const Movie = require('./Movie');
const Theater = require('./Theater');
const Show = require('./Show');
const { GuestUser, RegisteredUser } = require('./User');
const TicketBookingThread = require('./TicketBookingThread');
const BookMyShow = require('./BookMyShow');

// Data Setup

const registerUser1 = new RegisteredUser("User1");
const registerUser2 = new RegisteredUser("User2");
const guestUser = new GuestUser("GuestUser");

const movie1 = new Movie("Movie1", Language.HINDI, Genre.ACTION);
const movie2 = new Movie("Movie2", Language.ENGLISH, Genre.COMEDY);
const movie3 = new Movie("Movie3", Language.TAMIL, Genre.DRAMA);

const theater1 = new Theater("Theater1", "Address1", 50);
const theater2 = new Theater("Theater2", "Address2", 100);
const theater3 = new Theater("Theater3", "Address3", 150);

const show1 = new Show(new Date("2024-01-01T09:00:00"), movie1, theater1);
const show2 = new Show(new Date("2024-01-01T12:00:00"), movie2, theater2);
const show3 = new Show(new Date("2024-01-01T15:00:00"), movie3, theater3);

theater1.addShow(show1);
theater2.addShow(show2);
theater3.addShow(show3);

const theaters = [theater1, theater2, theater3];

const bookMyShow = new BookMyShow(theaters);

// Searching for a show and booking tickets
const shows = bookMyShow.searchShow("Movie1");
if (shows.length === 0) {
    console.log("No shows found for the requested movie.");
} else {
    const showToBook = shows[0]; // Choose the first available show

    const thread1 = new TicketBookingThread(showToBook, registerUser1, 5);
    const thread2 = new TicketBookingThread(showToBook, registerUser2, 5);
    const thread3 = new TicketBookingThread(showToBook, guestUser, 5);

    thread1.run();
    thread2.run();
    thread3.run();

    console.log("Tickets for User1:", thread1.getTicket());
    console.log("Tickets for User2:", thread2.getTicket());
    console.log("Tickets for GuestUser:", thread3.getTicket());

    console.log("Remaining seats for the show:", showToBook.availableSeats);
}
