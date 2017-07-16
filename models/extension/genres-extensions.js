const { Genres } = require('../genres.model');
const initParser = require('../../dom-parser');
const { DETAILS } = require('../../selectors');

Genres.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            const name = $('#header h1').html();
            // console.log(name);
            const ids = [];
            const movieIds = $('table.results tbody td.image a')
                .each((_, el) => {
                    // /title/tt306752
                    const href = $(el).attr('href');

                    const id = href.substr('/title/'.length);
                    ids.push(id);
                });
            return new Genres(name, ids);
        });
};


