var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TimelineSchema = new Schema({
	'user' : { type: Schema.Types.ObjectId, ref: 'User' },
	'sharing' : { type: Schema.Types.ObjectId, ref: 'Sharing' },
    'date': Date,
    'reshared': Boolean,
});

module.exports = mongoose.model('Timeline', TimelineSchema);



