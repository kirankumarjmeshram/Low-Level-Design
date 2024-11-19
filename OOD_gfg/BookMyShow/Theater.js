class Theater {
  static idCounter = 0;
  constructor(name, location, capacity) {
    this.id = ++Theater.idCounter;
    this.name = name;
    this.location = location;
    this.capacity = capacity;
    this.shows = [];
  }

  addShow(show) {
    this.shows.push(show);
  }

  getShows() {
    return this.shows;
  }
}

module.exports = Theater;
