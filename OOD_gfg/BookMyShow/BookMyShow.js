class BookMyShow {
    constructor(therters) {
        this.theaters = therters;
        this.movieMap = new Map();
        this.generateMovieMap();
    }

    generateMovieMap() {
        this.theaters.forEach(theater => {
            theater.getShows().forEach(show => {
                const movieName = show.movie.name;
                if (!this.movieMap.has(movieName)) {
                    this.movieMap.set(movieName, []);
                }
                this.movieMap.get(movieName).push(show);
        });
    });
   }
    searchShow(movieName) {
        return this.movieMap.get(movieName);
    }
}

module.exports = BookMyShow;