var db = require('../model/incident_model')
exports.dummyfunction = async function (req, res, nxt) {

}
exports.getUserIncident = async function (req, res, nxt) {
    try {
        var userid = req.body.uid;
        console.log(userid)
        var getUserIncident = await db.getUserIncident(userid);
        await res.json({ statusCode: 200, data: getUserIncident, message: "Success" })
    } catch (error) {

    }

}
exports.checkIsValidUser = async function (req, res, nxt) {
    try {
        var userName = req.body.userName;
        var password = req.body.password;

        var getUserData = await db.getUser(userName);
        if (getUserData.length == 1) {

            if (getUserData[0].password == password) { await res.json({ statusCode: 200, data: 'colData', message: "Success" }) }
            else {
                await res.json({ statusCode: 200, data: null, message: "Error" })
            }

        }
        else {
            await res.json({ statusCode: 200, data: null, message: "Error" })
        }

    } catch (error) {
        console.log(error)
    }

}