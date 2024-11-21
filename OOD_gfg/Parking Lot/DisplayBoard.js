const Status = require('./Status.js');
class DisplayBoard {
    constructor() {
        this.status = Status.AVAILABLE;
    }

    update(newStatus) {
        this.status = newStatus;
    }

    getStatus() {
        return this.status;
    }
}

module.exports = DisplayBoard;