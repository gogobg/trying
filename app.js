require('./polyfils');

const genersUrlBase = 'http://www.imdb.com/genre/';
const genres = ['animation'];

require('./models/extension');

const { parseGenres } = require('./parsers/genres-parser.js');
const { parseMovie } = require('./parsers/movie-parser.js');


const movies = [];

const loadMovie = (queue) => {
    console.log('x');
    if (queue.isEmpty()) {
        return Promise.resolve();
    }

    const id = queue.pop();
    console.log(id);
    debugger;
    const url = 'http://www.imdb.com/title/' + id;
    return parseMovie(url)
        .then((movie) => {
            movies.push(movie);
            return loadMovie(queue);
        });
};

const loadMovies = (queue) => {
    const PARALEL_LOADS = 5;

    return Promise.all(
        Array.from({ length: PARALEL_LOADS })
            .map(() => loadMovie(queue))
    )
        .then(() => {
            console.log(movies);
        });
};

const moviesIds = [];

const queue = require('./queue').getQueue();

Promise.all(
    genres.map((genre) => {
        const url = genersUrlBase + genre;
        return parseGenres(url)
            .then((g) => {
                queue.pushMany(...g.moviesIds);
            });
    }))
    .then(() => {
        return loadMovies(queue);
    })
    .catch((err) => console.log(err));
