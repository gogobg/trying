
const { JSDOM } = require('jsdom');

const initDomParser = (html) => {
    return new Promise((resolve) => {
        const dom = new JSDOM(html);
        $ = require('jquery')(dom.window);
        // console.log($);
        return resolve($);
    });
};

module.exports = initDomParser;
