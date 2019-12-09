var AlbumModel = require('../models/AlbumModel.js');

module.exports = {

    list: function (req, res) {
        var user_id = req.params.user_id; 
        AlbumModel.find({user: user_id}).lean().exec(function (err, albums) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting albums.',
                    error: err
                });
            }
            return res.json(albums);
        });
    },

    create: function (req, res) {
        var album = new AlbumModel({
            name: req.body.name,
            photo_mini: '',
            user: req.body.user_id
        });

        album.save(function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating new album.',
                    error: err
                });
            }
            return res.status(201).json(album);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        AlbumModel.findOne({_id: id}, function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting album',
                    error: err });
            }
            if (!album) {
                return res.status(404).json({ message: 'No such album.'});
            }
            
            album.nome: req.body.name ? req.body.name : album.name,
            album.photo_mini: req.body.photo_mini ? req.body.photo_mini ? album.photo_mini,

            album.save(function (err, album) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating album.',
                        error: err
                    });
                }

                return res.json(album);
            });
        });
    },

};

