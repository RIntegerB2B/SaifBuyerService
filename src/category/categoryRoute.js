var categoryMgr=require('../category/categoryMgr');


module.exports = function (app) {

app.route('/category')
.get(categoryMgr.findCategory);

}