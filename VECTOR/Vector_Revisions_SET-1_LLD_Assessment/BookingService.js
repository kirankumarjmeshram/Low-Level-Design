class BookingService {
    constructor(workoutService) {
        this.workoutService = workoutService;
    }
    bookWorkout(user, type, slot, center) {
        const workout = this.workoutService.getWorkout(type, slot, center);
        if(!workout.isAvailable()) {
            throw new Error('Workout Not found');
            }
            if(user.bookings.some(b => b.type === type && b.slot === slot && b.center === center)) {
                throw new Error('Workout already booked');
            }else {
                workout.addParticipant(user.id);
                user.addBooking({type, slot, center});
            }
    }
}

module.exports = { BookingService };