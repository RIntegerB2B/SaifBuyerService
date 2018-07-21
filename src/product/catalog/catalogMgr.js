var catalogDA=require('./catalogDA')

exports.findCatalog = function (req, res) {
    try {
        catalogDA.findCatalog(req, res)
    } catch (error) {
        console.log(error);
    }
    
}
