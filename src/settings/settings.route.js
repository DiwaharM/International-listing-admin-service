var adsMgr = require('./ads/adsMgr');
var bannerMgr = require('./banner/bannerMgr');
var headerMgr = require('./header/headerMgr');
var footerMgr = require('./footer/footerMgr');
var termMgr = require('./termsanduse/termsanduseMgr');
var supportMgr = require('./supports/supportMgr');
var policyMgr = require('./policy/policyMgr');
var contactMgr = require('./contact/contactMgr');
var faqMgr = require('./faqs/faqMgr');
var promotionMgr = require('./promotion/promotionMgr');
var paymentPackageMgr = require('./paymentPackage/paymentPackageMgr');

module.exports = function (app) {
    app.route('/adsforupload/:position')
        .put(adsMgr.createAdsImage);

    app.route('/getimageforads')
        .get(adsMgr.getImageForAds);

    app.route('/deleteads/:id')
        .delete(adsMgr.deleteAds);

    app.route('/bannerforupload/:position')
        .put(bannerMgr.createBanners);

    app.route('/getimageforbanner')
        .get(bannerMgr.getBanners);

    app.route('/deletebanner/:id')
        .delete(bannerMgr.deleteBanners);

    app.route('/headerforupload')
        .post(headerMgr.createHeader);

    app.route('/getimageforheader')
        .get(headerMgr.getImageForHeader);

    app.route('/termforupload')
        .post(termMgr.createTerm);

    app.route('/getallterm')
        .get(termMgr.getAllTerm);

    app.route('/updateterms/:id')
        .delete(termMgr.deleteTerms);

    app.route('/createsupport')
        .post(supportMgr.createSupport);

    app.route('/getallsupport')
        .get(supportMgr.getAllSuppot);

    app.route('/updatesupport/:id')
        .put(supportMgr.updateSupport);

    app.route('/deletesupport/:id')
        .delete(supportMgr.deleteSupport);

    app.route('/createpolicy')
        .post(policyMgr.createPrivacyPolicy);

    app.route('/getallpolicy')
        .get(policyMgr.getPrivacyPolicy);

    app.route('/updatepolicy/:id')
        .put(policyMgr.updatePrivacyPolicy);

    app.route('/deletepolicy/:id')
        .delete(policyMgr.deletePolicy);

    app.route('/createcontact')
        .post(contactMgr.createContact);

    app.route('/getallcontact')
        .get(contactMgr.getAllContact);

    app.route('/getsinglecontact/:id')
        .get(contactMgr.getSingleContact);

    app.route('/updatecontact/:id')
        .put(contactMgr.updateContact);

    app.route('/deletecontact/:id')
        .delete(contactMgr.deleteContact);

    app.route('/createfaq')
        .post(faqMgr.createFAQ);


    app.route('/getallfaq')
        .get(faqMgr.getFAQ);

    app.route('/getsinglefaq/:id')
        .get(faqMgr.getSingleFAQ);

    app.route('/updatefaq/:id')
        .put(faqMgr.updateFAQ);

    app.route('/deletefaq/:id')
        .delete(faqMgr.deleteFAQ);

    app.route('/footer')
        .post(footerMgr.createFooter);

    app.route('/createLogoImage/:id')
        .put(footerMgr.createLogoImage);

    app.route('/footerDetails')
        .get(footerMgr.getFooterDetails);

    app.route('/updatefotterdetails/:id')
        .put(footerMgr.updateFooterDetails);

    app.route('/addpromotions')
        .post(promotionMgr.createPromotions);

    app.route('/getpromotions')
        .get(promotionMgr.getPromotion);

    app.route('/deletepromotion/:id')
        .delete(promotionMgr.deletePromotion);

    // payment Package

    app.route('/createPayment') // create Payment package
        .post(paymentPackageMgr.createPayment);

    app.route('/getallpayment') // get all payment package
        .get(paymentPackageMgr.getAllPackage);

    app.route('/updatepayment/:id') // update payment package
        .put(paymentPackageMgr.updatePackage);

    app.route('/singlepayment/:id') // get single payment package
        .get(paymentPackageMgr.getSinglePackage);

    app.route('/deletepayment/:id') // delete payment package
        .delete(paymentPackageMgr.deletePackage);
}