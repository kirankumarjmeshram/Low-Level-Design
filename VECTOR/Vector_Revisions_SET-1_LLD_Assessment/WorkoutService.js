class WorkoutService {
  constructor() {
    this.workouts = [];
  }
  addWorkout(workout) {
    this.workouts.push(workout);
  }
  getWorkout(type, slot, center) {
    return this.workouts.find(w => w.type === type && w.slot === slot && w.center === center);
  }

  listWorkouts(center, date) {
    return this.workouts.filter(w => w.center === center && w.slot === date);
  }
}

module.exports = { WorkoutService };