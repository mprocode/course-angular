var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SharingSchema = new Schema({
	'user' : { type: Schema.Types.ObjectId, ref: 'User' },
    'photo': { type: Schema.Types.ObjectId, ref: 'Photo' },
    'date': Date,
    'likes': [{type: Schema.Types.ObjectId, ref: 'User'}],
    'reshared' : [{ type: Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('Sharing', SharingSchema);

