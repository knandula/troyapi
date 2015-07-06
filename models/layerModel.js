/**
 * Created by rachanti on 6/27/2015.
 */
var db = require('mongoose');
var LayerModel = db.Schema({
    name: String,
    type : db.Schema.Types.Mixed,
    geometry : db.Schema.Types.Mixed

});

// Mongoose Model definition
module.exports = db.model('layercollection',LayerModel,'layercollection');

