var BuyInBulk = require('../../model/buyInBulk.model');

exports.bulkRegistration = function (req, res) {
    var bulk = new BuyInBulk(req.body);
    bulk.date = new Date();
    bulk.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while saving data'
            })
        } else {
            BuyInBulk.find({}).select().exec(function (err, bulkdata) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while retreiving data'
                    })
                } else {
                    res.status(200).json(bulkdata);
                }
            })
        }
    })
}