class WorkoutSlot {
  constructor(center, time, type) {
    this.center = center;
    this.time = time;
    this.type = type;
    this.capacity = 3;
    this.participants = [];
  }

  isAvailable() {
    return this.participants.length < this.capacity;
  }

  bookSlot(user) {
    if (this.isAvailable()) {
      this.participants.push(user);
      return true;
    } else {
      return false;
    }
  }
}

export default WorkoutSlot;
