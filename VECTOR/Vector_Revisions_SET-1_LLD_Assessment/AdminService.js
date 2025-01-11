class AdminService {
    constructor(workoutService) {
        this.workoutService = workoutService;
    }

    modifyWorkout(type, slot, center, capacity) {
        const workout = this.workoutService.getWorkout(type, slot, center);
        if(workout) {
            workout.capacity = capacity;
        } else {
            throw new Error('Workout Not found');
        }
        }
}

module.exports = { AdminService };