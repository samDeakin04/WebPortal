const MongoClient = require('mongoDb').MongoClient
var ObjectId = require('mongodb').ObjectId; 
const uri =
    "mongodb+srv://dbuser666:sit725DataUser@cluster0.q6kyg.mongodb.net/?retryWrites=true&w=majority";
const dbclient = new MongoClient(uri, { useNewUrlParser: true });

exports.addCollection = async function (collectionName, dataObj) {

    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('ageig');
    return await db.collection(collectionName).insertOne(dataObj)
   
}

exports.getUser = async function () {
    try {
        var dbConnection = await dbclient.connect();
        var db = await dbConnection.db('ageis');
        var collecationData = await db.collection('user').find({}).toArray();
        return collecationData
    } catch (error) {
        console.log(error)
    }

}
exports.getUserByID = async function (uid) {
    try {
        var dbConnection = await dbclient.connect();
        var db = await dbConnection.db('ageis');
        var o_id = new ObjectId(uid);
        var userData = await db.collection('user').find({_id:o_id}).toArray();
        console.log(userData);
        return userData
    } catch (error) {
        console.log(error)
    }

}
exports.addUser = async function (dataObj) {

    console.log('Hello')
    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('ageis');
    return await db.collection('user').insertOne(dataObj)
}
exports.editUsers = async function (dataObj) {

  console.log(55)
  console.log(dataObj)
    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('ageis');
    var o_id = new ObjectId(dataObj._id);
    var myquery = { _id:o_id};
    var newvalues = { $set: {username: dataObj.username, password:  dataObj.password,Name: dataObj.Name ,type: dataObj.type} };
    db.collection("user").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      
    });
    
}
exports.deleteUsers = async function (dataObj) {

  console.log(66)
  console.log(dataObj)
    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('ageis');
    var o_id = new ObjectId(dataObj);
    var myquery = { _id:o_id};
    db.collection("user").deleteOne(myquery, function(err, res) {
      if (err) throw err;
      console.log("1 document Deleted");
      
    });
    
}


exports.testConnection = async function (collectionName){
    console.log(collectionName)
    client.connect((err,db)=>{
        projectCollection = client.db().collection(collectionName);
        if(!err){
            console.log('Mongo DB COnnected');

        }
        else{
            console.log("DB Error : ", err);
            process.exit(1)
        }
    });
}

