require('./polyfils');

const genersUrlBase = 'http://www.imdb.com/genre/';
const genres = ['action'];

const { Movie } = require('./models/movie.model');

require('./models/extension');

const movies = [];

const getMovieData = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('invalid URL');
            }
            return response.text();
        })
        .then((html) => {
            const movie = Movie.fromHtml(html);
            return movie;
        });
};

Promise.all([getMovieData('http://www.imdb.com/title/tt0114709/'),
getMovieData('http://www.imdb.com/title/tt2250912/'),
])
    .then((x) => {
        console.log(x);
    });
