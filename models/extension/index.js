const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname)
    .filter((x) => x.includes('extensions'))
    .forEach((ext) => {
        const moduleLoad = path.join(__dirname, ext);
        // console.log(moduleLoad);
        require(moduleLoad);
    });


// fs.readdirSync(__dirname)
//     .filter((x) => x.includes('extensions'))
//     .forEach((ext) => {
//         // console.log(__dirname + '/' + ext);
//         require(__dirname + '/' + ext);
//     });

// leet m = (__dirname)

// require('./movies-extensions');
// require('./categories.extensions');
