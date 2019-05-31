'use strict';
var superCategoryMgr = require('./superCategory/superCategoryMgr');
var mainCategoryMgr = require('./mainCategory/mainCategoryMgr');

module.exports = function (app) {
    // super category
    app.route('/addCategory')
        .post(superCategoryMgr.superCategoryInsert);

    app.route('/categoryDetails')
        .get(superCategoryMgr.superCategoryShow);

    app.route('/category/:id')
        .put(superCategoryMgr.superCategoryEdit);

    app.route('/categoryDelete/:categoryId/name/:name')
        .delete(superCategoryMgr.superCategoryDelete);

    app.route('/supercategoryimage/:id')
        .put(superCategoryMgr.createSuperCategoryImage);

    // main category
    app.route('/superCategory')
        .get(mainCategoryMgr.showSuperCategory);

    app.route('/mainCategory')
        .post(mainCategoryMgr.mainCategoryInsert);
    app.route('/supercategory/:supId/maincategoryname/:name/maincategoryid/:mainId')
        .put(mainCategoryMgr.createMainCategoryImage);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .put(mainCategoryMgr.mainCategoryUpdate);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId/name/:name')
        .delete(mainCategoryMgr.mainCategoryDelete);

    app.route('/superCategorydetail/:id')
        .get(mainCategoryMgr.getMainCategory);

    app.route('/showMainCategory')
        .get(mainCategoryMgr.getAllMainCategory)
}
