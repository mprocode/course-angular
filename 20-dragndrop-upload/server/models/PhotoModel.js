var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PhotoSchema = new Schema({
    'description': String,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
    'album': { 
	 	type: Schema.Types.ObjectId,
	 	ref: 'Album'
    },
    'photo': String,
    'photo_mini': String,
});

module.exports = mongoose.model('Photo', PhotoSchema);


