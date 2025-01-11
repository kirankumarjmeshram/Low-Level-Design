class Workout {
    constructor(type, slot, center, capacity = 3) {
        this.type = type;
        this.slot = slot;
        this.center = center;
        this.capacity = capacity;
        this.participants = [];
    }

    isAvailable() {
        return this.participants.length < this.capacity;
    }

    addParticipant(userId) {
        if(!this.isAvailable()) {
            throw new Error('Slot is full');
        }else{
            this.participants.push(userId);
        }
    }
}

module.exports = { Workout };