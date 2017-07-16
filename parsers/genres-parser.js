const { Genres } = require('../models/genres.model');

const parseGenres = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                debugger;
                throw new Error('invalid URL');
            }
            return response.text();
        })
        .then((html) => {
            const category = Genres.fromHtml(html);
            return category;
        });
};

module.exports = { parseGenres };
