const MongoClient = require('mongoDb').MongoClient
const uri =
    "mongodb+srv://dbuser666:sit725DataUser@cluster0.q6kyg.mongodb.net/?retryWrites=true&w=majority";
const dbclient = new MongoClient(uri, { useNewUrlParser: true });

exports.addCollection = async function (collectionName, dataObj) {

    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('ageig');
    return await db.collection(collectionName).insertOne(dataObj)
   
}

exports.getUserCount = async function () {
    try {
        var dbConnection = await dbclient.connect();
        var db = await dbConnection.db('ageis');
        var myquery = { website: 111 };
        var newvalues = { $inc: {visit: 1 } };
        var collecationData = await db.collection('uservisit').updateOne(myquery,newvalues);
        console.log(collecationData)
        var collecationDatass = await db.collection('uservisit').find(myquery).toArray();
        console.log(collecationDatass)
        return collecationDatass
    } catch (error) {
        console.log(error)
    }

}



