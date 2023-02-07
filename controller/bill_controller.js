var db = require('../model/bill_model')
exports.dummyfunction = async function (req, res, nxt) {

}
exports.getUserBill = async function (req, res, nxt) {
    try {
        var userid = req.body.uid;
        console.log(userid)
        var getUserIncident = await db.getUserBills(userid);
        await res.json({ statusCode: 200, data: getUserIncident, message: "Success" })
    } catch (error) {

    }

}
