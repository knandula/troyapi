/**
 * Created by rachanti on 6/21/2015.
 */
var express = require('express');
//var user = require('../models/userModel');
module.exports= function (app) {
    app.get('/',function(req,res){
        res.send('My Api');
    });
    require('../models/userModel')(app);

    //var router = express.Router();
    //
    //router.route('/users')
    //    .post(function(req,res){
    //        var user1 = new user(req.body);
    //        user1.save();
    //        console.log(user1);
    //        res.send(user1);
    //    })
    //    .get(function(req,res){
    //        var query = {};
    //        if (req.query.name){
    //            query.name = req.query.name;
    //        }
    //        user.find(function(err,users){
    //            if(err)
    //                res.status(500).send(err);
    //            else
    //                res.json(users);
    //        })
    //        // var responsejson ={hell0:"This is my api"};
    //        // res.json(responsejson);
    //    });
    //
    //router.route('/users/:Id')
    //    .get(function(req,res) {
    //        user.findById(req.params.Id, function (err, users) {
    //            if (err)
    //                res.status(500).send(err);
    //            else
    //                res.json(users);
    //        });
    //    });
    //
    //app.use('/api',router);

};
