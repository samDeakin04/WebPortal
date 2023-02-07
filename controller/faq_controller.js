var db = require('../model/faq_model')
exports.dummyfunction = async function (req, res, nxt) {

}
exports.getFaq = async function (req, res, nxt) {
    try {
        
        var getFAQ = await db.getFaq();
        await res.json({ statusCode: 200, data: getFAQ, message: "Success" })
    } catch (error) {

    }

}
