const { User } = require('./User');
const { WorkoutService } = require('./WorkoutService');
const { BookingService } = require('./BookingService');
const { AdminService } = require('./AdminService');

class StayFitSystem {
    constructor() {
        if (StayFitSystem.instance) {
            return StayFitSystem.instance;
        }
        this.users = [];
        this.workoutService = new WorkoutService();
        this.bookingService = new BookingService(this.workoutService);
        this.adminService = new AdminService(this.workoutService);
        StayFitSystem.instance = this;
    }

    registerUser(name) {
        const id = `user -$ { this.users.length + 1 }`;
        const user = new User(id, name);
        this.users.push(user);
        return user;
    }

    getUser(userId) {
        return this.users.find(u => u.id === userId);
    }
}

module.exports = { StayFitSystem };