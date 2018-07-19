var categoryDA=require('./categoryDA')

exports.findCategory = function (req, res) {
    categoryDA.findCategory(req, res)
}
