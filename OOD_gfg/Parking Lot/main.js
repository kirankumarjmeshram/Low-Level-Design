const ParkingLot = require('./ParkingLot');
const AutomatedSystem = require('./AutomatedSystem');
const DisplayBoard = require('./DisplayBoard');
const Customer = require('./Customer');

// Create instances
const displayBoard = new DisplayBoard();
const parkingLot = new ParkingLot("MyParkingLot", 100, "Sec-135, Noida", 50, null, displayBoard);
const automatedSystem = new AutomatedSystem(parkingLot); // Pass parking lot to automated system
parkingLot.automatedSystem = automatedSystem; // Set automated system in parking lot

// Check and print parking lot availability
console.log("Initial Parking Lot Availability:", parkingLot.getAvailability());

// Create customers
const customer1 = new Customer("Piyush", "UP85 AX 5454");
const customer2 = new Customer("Ayush", "UP86 AB 9999");

// Generate tickets for customers
const ticket1 = automatedSystem.generateTicket(customer1);
if (ticket1) {
    console.log("Ticket 1 Details:", ticket1);
} else {
    console.log("Failed to generate ticket for customer 1");
}

const ticket2 = automatedSystem.generateTicket(customer2);
if (ticket2) {
    console.log("Ticket 2 Details:", ticket2);
} else {
    console.log("Failed to generate ticket for customer 2");
}

// Print updated parking availability
console.log("Updated Parking Lot Availability:", parkingLot.getAvailability());

// Test case: Release a spot and check availability
if (ticket1) {
    parkingLot.releaseSpot(ticket1.spotNumber);
    console.log("Released spot for ticket 1");
    console.log("Parking Lot Availability after releasing spot:", parkingLot.getAvailability());
}

// Test case: Generate a ticket after releasing a spot
const ticket3 = automatedSystem.generateTicket(customer1);
if (ticket3) {
    console.log("Ticket 3 Details after releasing spot:", ticket3);
} else {
    console.log("Failed to generate ticket for customer 1 after releasing spot");
}

// Exit the process
process.exit(0);