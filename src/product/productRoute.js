var catalogMgr = require('../product/catalog/catalogMgr');
var subProductMgr = require ( '../product/sub-product/subProductMgr')

module.exports = function (app) {

    app.route('/catalog')
        .get(catalogMgr.findCatalog);

    app.route('/catalog/:id/product')
        .get(subProductMgr.getProduct);

}