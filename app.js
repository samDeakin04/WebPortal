var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var path = __dirname + '/views';



var userCount = require('./controller/login_controller')

var loginRouter = require('./route/loginRoute')
var incidentRouter = require('./route/incidentRoute')
var billRouter = require('./route/billRoute')
var faqRouter = require('./route/faqRoute')
var userRouter = require('./route/userRoute')


var userCount = require('./controller/login_controller')

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket)=> {
    console.log('a user connected');

    userCount.getUserCount();

    socket.on('disconnect',() => {
        console.log('user disconnected');
    })
    setInterval(()=>{
        socket.emit('Number', parseInt(Math.random()*10));
    },1000);
});

const MongoClient = require('mongoDb').MongoClient
const uri = "mongodb+srv://dbuser666:sit725DataUser@cluster0.q6kyg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const projectCollection =(collectionName)=>{
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
//Services
// var calculation = require("./services/calculation");
// var car = require("./services/car");
app.use(express.static('assets'));
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
router.get("/", function (req, res) {
    res.sendFile(path + "/welcome.html");
});
router.get("/faq", function (req, res) {
    res.sendFile(path + "/faq.html");
});
router.get("/eservice", function (req, res) {
    res.sendFile(path + "/eservices.html");
});
router.get("/customer", function (req, res) {
    res.sendFile(path + "/customer_dashboard.html");
});
router.get("/mybills", function (req, res) {
    res.sendFile(path + "/mybills.html");
});
router.get("/incidentreport", function (req, res) {
    res.sendFile(path + "/incidentReport.html");
});
router.get("/dummy", function (req, res) {
    res.sendFile(path + "/dummy.html");
});
router.get("/admin", function (req, res) {
    res.sendFile(path + "/admin_dashboard.html");
});
router.get("/customers", function (req, res) {
    res.sendFile(path + "/customer.html");
});


app.use("/", router);
app.use("/login", loginRouter);
app.use("/webutil", loginRouter);
app.use("/incident", incidentRouter);
app.use("/bill", billRouter);
app.use("/faq", faqRouter);
app.use("/adminpages", userRouter);
if(!module.parent){
server.listen(3000, function () {
    console.log("Live at Port 3000");
});
}
module.exports = server; // for testing