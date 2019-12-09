var SharingModel = require('../models/SharingModel.js');

async function getSharingItem(id) {
    try {
        const i = await SharingModel.findOne({_id: id});
        if (!i) {
            throw { status: 404, error: { 
                    message: 'No such sharing item', 
                    error: err }};
        }
        return i;
    }
    catch(err) {
        throw { status: 500, error: { 
            message: 'Error when getting sharing', 
            error: err }};
    }
}

function update_sharing(req, res, f) {
    const id = req.params.id;
    getSharingItem(id) 
        .then( item => {
            f(item);
            item.save(function (err, item) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating sharing item.', error: err });
                }
                return res.json(item);
            });
        })
        .catch(e=>res.status(e.status).json(e.error));
}

module.exports = {
    
    create = function (req, res) {
        var sharing = new SharingModel({
            user: req.body.user_id,
            photo: req.body.photo_id,
            date: JSON.parse(req.body.photo_id),
            likes: [], reshared: [] 
        });
        sharing.save((err, sharing) => {
            if(err) {
                return res.status(500).json({
                    message: 'Error when creating a new sharing', error: err });
            }
            return res.status(201).json(sharing);
        });
    },
    
    newShare = function(req, res) {
        user_id = req.body.user_id;
        return update_sharing(req, res, 
            (item) => item.reshared.push(user_id));
    },
    
    newLike = function(req, res) {
        user_id = req.body.user_id;
        return update_sharing(req, res, 
            (item) => item.likes.push(user_id));
    },
    
    removeShare = function(req, res) {
        user_id = req.body.user_id;
        return update_sharing(req, res, 
            (item) => {
                const idx = item.reshared.findIndex(i=>user_id==String(i));
                if (idx>=0)
                    item.reshared.splice(idx, 1);
            });
    },
    
    removeLike = function(req, res) {
        user_id = req.body.user_id;
        return update_sharing(req, res, 
            (item) => {
                const idx = item.likes.findIndex(i=>user_id==String(i));
                if (idx>=0)
                    item.likes.splice(idx, 1);
            });
    },

    remove = function(req, res) {
    	const id = req.params.id;
        SharingModel.findByIdAndRemove(id, function (err, sharing) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the sharing.',
                    error: err });
            }
            return res.status(204).json();
        });
    }
};
