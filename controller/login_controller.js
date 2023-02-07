var db = require('../model/login_model')
var dbs = require('../model/webCount_model')
exports.dummyfunction = async function (req, res, nxt) {

}
exports.getUserCount = async function (req, res, nxt) {
    try {
        var getUserCount = await dbs.getUserCount();
       
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

