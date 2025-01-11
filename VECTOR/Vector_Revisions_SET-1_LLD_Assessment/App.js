const { StayFitSystem } = require('./StayFitSystem');
const { Workout } = require('./Workout');

const stayFit = new StayFitSystem();

// Admin Add workout
stayFit.workoutService.addWorkout(new Workout('Yoga', '6 - 7', 'Center1'));
stayFit.workoutService.addWorkout(new Workout('Zumba', '7 - 8', 'Center2'));

// User registeration
const user1 = stayFit.registerUser('User1');

// Booking a workout
try {
    stayFit.bookingService.bookWorkout(user1, 'Yoga', '6 - 7', 'Center1');
    console.log('Workout booked successfully');
    } catch (err) {
        console.log(err.message);
    }

// Admin modify workout
stayFit.adminService.modifyWorkout('Yoga', '6 - 7', 'Center1', 20);