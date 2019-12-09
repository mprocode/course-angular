var TimelineModel = require('../models/TimelineModel.js');
var SharingModel = require('../models/SharingModel.js');

async function getTimelineItemsByUser(user_id) {
    try {
        const timelines = await TimelineModel.find({ user: user_id }).lean().exec();
        timelines.forEach( (t) => {  
            t.sharing = SharingModel.findOne(t.sharing).lean().exec();
        });
        return timelines;
    }
    catch(err) {
        throw Error(err);
    }
}

module.exports = {

    list: function (req, res) {
        var user_id = req.params.user_id; 
        getTimelineItemsByUser(user_id)
            .then((timelines)=>res.json(timelines))
            .catch( (err) => {
                return res.status(500).json({
                    message: 'Error when getting timeline items.',
                    error: err
                });
            }
    },

    create: function (req, res) {
        var timeline = new TimelineModel({
            user: req.body.user_id
	        sharing : req.body.sharing_id,
            date: JSON.parse(req.body.date),
            reshared: req.body.reshared,
        });
        timeline.save(function (err, timeline_item) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating new timeline item.',
                    error: err
                });
            }
            return res.status(201).json(timeline_item);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        TimelineModel.findOne({_id: id}, function (err, timeline_item) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting timeline item', error: err });
            }
            if (!timeline_item) {
                return res.status(404).json({ message: 'No such timeline item.'});
            }
            
	        timeline_item.sharing = req.body.sharing_id;
            timeline_item.date= JSON.parse(req.body.date);
            timeline_item.reshared= req.body.reshared;

            timeline_item.save(function (err, item) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating timeline item.', error: err });
                }
                return res.json(item);
            });
        });
    },

};

