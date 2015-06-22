/**
 * Created by rachanti on 6/20/2015.
 */
var db = require('mongoose');
var express = require('express');
var router = express.Router();

var userModel = db.Schema(
    {
        name: String,
        mobile : Number
    }
);

//module.exports = db.model('Users',userModel);

module.exports = function call(app){

var user = db.model('Users',userModel);
    router.route('/users')
        .post(function(req,res){
            var user1 = new users(req.body);
            user1.save();
            console.log(user1);
            res.send(user1);
        })
        .get(function(req,res){
            var query = {};
            if (req.query.name){
                query.name = req.query.name;
            }
            user.find(function(err,users){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(users);
            })
            // var responsejson ={hell0:"This is my api"};
            // res.json(responsejson);
        });


   //adding extra middle ware with next(instead of repeating twice for get and put)
    router.route('/users/:Id')
        .get(function(req,res,next) {
            user.findById(req.params.Id, function (err, users) {
                if (err)
                    res.status(500).send(err);
                else if (users){
                     req.user = users;
                     next();
                }else
                res.status(404).send('No User');

            });
    router.route('/users/:Id')
        .get(function(req,res) {
              res.json(req.user);
            })
        .put (function(req,res){
                req.user.name = req.body.name;
                req.user.mobile = req.body.mobile;
                req.user.save();
                res.json(req.user);
            })
        });

    app.use('/api',router);

}


