var PhotoModel = require('../models/PhotoModel.js');

module.exports = {

    getByAlbum: function (req, res) {
        var album_id = req.params.album_id; 
        // lean, pega somente objetos javascripts, nao modelos
        PhotoModel.find({album: album_id}).lean().exec(function (err, photos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting photos from the album.',
                    error: err
                });
            }
            return res.json(photos);
        });
    },

    create: function (req, res) {
        var photo = new PhotoModel({
            description: req.body.description,
            photo_mini: '',
            photo: '',
            user: req.body.user_id,
            album: req.body.album_id,
        });

        photo.save(function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating new album.',
                    error: err
                });
            }
            return res.status(201).json(photo);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        PhotoModel.findOne({_id: id}, function (err, photo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting photo',
                    error: err });
            }
            if (!photo) {
                return res.status(404).json({ message: 'No such photo.'});
            }
            
            photo.description: req.body.description,

            photo.save(function (err, album) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating photo.',
                        error: err
                    });
                }
                return res.json(photo);
            });
        });
    },

};

