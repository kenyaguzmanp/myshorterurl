var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    originalUrl: String,
    shorterUrl: String
}, {timestamps: true});

var ModelClass = mongoose.model('shortUrl', urlSchema);

/*
urlSchema    
    .virtual('url')
    .get(function () {
    return '/users/' + this._id;
    });
*/
module.exports = ModelClass;