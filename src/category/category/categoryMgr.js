var categoryDA = require('./categoryDA')


exports.showSuperCategory = function (req, res) {
    try {
        categoryDA.showSuperCategory(req, res);
    } catch (error) {
        console.log(error);
    }

}

/* exports.showSuperCategory = function (req, res) {
    try {
        categoryDA.showSuperCategory(req, res);
    } catch (error) {
        console.log(error);
    }
} */


