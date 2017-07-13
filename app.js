require('./polyfils');
const { DETAILS } = require('./selectors');
console.log(DETAILS);
const genersUrlBase = 'http://www.imdb.com/genre/';
const genres = ['action'];

const getMovieData = (url) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('invalid URL');
            }
            return response.text();
        })
        .then((html) => {
            return require('./dom-parser')(html);
        })
        .then(($) => {
            const title = $(DETAILS.TITLE_SELECTOR).html();
            console.log(title);

            // const title = $('title').html();
            // console.log(title);
        });
};

getMovieData('http://www.imdb.com/title/tt0114709/');
