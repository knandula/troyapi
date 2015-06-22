/**
 * Created by rachanti on 6/20/2015.
 */
var express = require('express');
var app = express();
var Database = require('./settings').mongo;
var bodyparser = require('body-parser');

require('./lib/mongoose')(Database);
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
var port = process.env.PORT || 3000;
//var user = require('./models/userModel');
require('./routes/routes')(app);

//var router = express.Router();
//
//router.route('/users')
//      .post(function(req,res){
//        var user1 = new user(req.body);
//        user1.save();
//        console.log(user1);
//        res.send(user1);
//    })
//      .get(function(req,res){
//        var query = {};
//        if (req.query.name){
//            query.name = req.query.name;
//        }
//       user.find(function(err,users){
//           if(err)
//           res.status(500).send(err);
//           else
//           res.json(users);
//       })
//       // var responsejson ={hell0:"This is my api"};
//       // res.json(responsejson);
//    });
//
//router.route('/users/:Id')
//.get(function(req,res) {
//        user.findById(req.params.Id, function (err, users) {
//            if (err)
//                res.status(500).send(err);
//            else
//                res.json(users);
//        });
//    });
//
//app.use('/api',router);
//app.get('/',function(req,res){
//    res.send('My Api');
//});

app.listen(port,function(){
    console.log('Gulp is Running on the port',port);
});
app.on('error', function (err) {
    console.log('dir error', err);
});




