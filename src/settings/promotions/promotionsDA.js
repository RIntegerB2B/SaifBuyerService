var Promotions = require('./../../model/promotions.model');



exports.getPromotions = function (req, res) {
    Promotions.find({}).select().sort({
        position: 1
    }).exec(function (err, promotions) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(promotions);
        }
    });
}
