/**
 * Created by rachanti on 6/21/2015.
 */

var mongoose = require('mongoose');
module.exports = function call (Database) {
    mongoose.connect(Database.db);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log("streatbeat database opened..")
    });
}
