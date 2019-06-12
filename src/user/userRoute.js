var subscribedMgr = require('./SubscribedCustomer/subscribedCustomerMgr');
var businessUserMgr = require('./businessUser/businessUserMgr');
var reviewMgr = require('./review/reviewMgr');
var reportMgr = require('./report/reportMgr');

module.exports = function (app) {
    app.route('/getpulbeicuser').get(subscribedMgr.getAllCustomer);
    app.route('/getbusniessuser').get(businessUserMgr.getAllBusinessUser);
    app.route('/getselectedbusniessuser/:id').get(businessUserMgr.getSelectedBusinessUser);
    app.route('/getallreview').get(reviewMgr.getReview);
    app.route('/getcurrentvisitorcount/:id').post(businessUserMgr.getCurrentVistiorCount);
    app.route('/gettotalvisitorcount/:id').get(businessUserMgr.getTotalVistiorCount);
    app.route('/selectedreport/:id').get(reportMgr.getSelectedReport);
    app.route('/subscriberselectedreport/:id').get(reportMgr.getSubscriberSelectedReport);
    app.route('/deletesinglecompnanyimage/:id').post(businessUserMgr.deleteSingleCompanyImage);
}