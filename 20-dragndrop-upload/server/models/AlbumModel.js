var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AlbumSchema = new Schema({
	'name' : String,
	'photo_mini' : String,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
});

module.exports = mongoose.model('Album', AlbumSchema);

