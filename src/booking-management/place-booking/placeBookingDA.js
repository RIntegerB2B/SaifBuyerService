var Booking = require('../../model/booking.model');
var SubscribeDetail = require('../../model/subscribe.model');
const webpush = require('web-push');
const vapidKeys = {
  "publicKey": "BNMN_-1BUbcWu_HDPo-fedCKVZRtbx_Lv1718BzoFfiERREFBeknxGLmJvn5dzU1xM5zS-v5nkE8gU1ak49YOcE",
  "privateKey": "xbIt--86Az8UtZyoobrxZwgI4FEYHlqUoTSYWZII7qE"
}
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


exports.placeBooking = function (req, res, bookingID) {
  var bookingData = new Booking(req.body);
  bookingData.bookingId = bookingID;
  bookingData.total = req.body.total;
  bookingData.products = req.body.products,
    bookingData.addressDetails = req.body.addressDetails
  bookingData.bookingStatus = 'New',
    bookingData.bookingDate = new Date();
  bookingData.save(
    function (err, productDetails) {
      if (err) { // if it contains error return 0
        res.status(500).send({
          "result": 0
        });
      } else {
        SubscribeDetail.find({}, function (err, subscriptionData) {
          if (err) {
            res.status(500).send({
              message: "Some error occurred while retrieving notes."
            });
          } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
              "notification": {
                "title": 'New product shoot booking',
                "body": 'test notification',
                /*   "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl, */
                "vibrate": [100, 50, 100],
                "data": {
                  "url": 'https://rinteger.com/admin/navheader/productbooking',
                  "dateOfArrival": Date.now(),
                  "primaryKey": 1
                }
              }
            };
            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                sub.userSubscriptions, JSON.stringify(notificationPayload))))
              .then(() => res.status(200).json(productDetails))
              .catch(err => {
                console.error("Error sending notification, reason: ", err);
                res.sendStatus(500);
              });
          }
        });
      }
    });
}