const UserModel = require('../models/UserModel.js');
const bcrypt = require('bcryptjs');
const consts = require('../consts.js');
const jwt = require('jsonwebtoken');

module.exports = {

    register: function (req, res) {
        const user = new UserModel(req.body);
        user.password = bcrypt.hashSync(req.body.password, consts.bcryptSalts);
        
        user.save(function (err, saved_user) {
            if (err) {
                return res.status(500)
                    .json({message: 'Error while saving user.', error: err });
            }   
            return res.status(200).json(saved_user);
        });                 

    },

    login: function (req, res) {

        const password = req.body.password;
        const email = req.body.email;

        //UserModel.findOne({email: email}, function (err, user) {
        UserModel.findOne({email: email}).lean().exec(function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Got error trying to fetch user data.', error: err });
            }
            
            const auth_err = (password==null || !user) || 
                (!bcrypt.compareSync(password, user.password));

            if (auth_err) {
                return res.status(404).json({
                    message: 'Wrong e-mail or password.'
                });
            }

            let token = jwt.sign({_id: user._id}, consts.keyJWT, {expiresIn: consts.expiresJWT});

            return res.json({
				...user,
                token: token,
                password: undefined
            });

        });
    },

    user_data: function(req, res) {

        var token = req.get('Authorization');

        jwt.verify(token, consts.keyJWT, (err, decoded) => {
            
            const _id = decoded._id;
            UserModel.findById(_id).lean().exec( function (err, user) {
                if (err || !user) {
                    return res.status(500).json({
                        message: 'Error when trying to fetch user data.', error: err });
                }

                let token = jwt.sign({_id: user._id}, consts.keyJWT, {expiresIn: consts.expiresJWT});
                return res.json({
		    		...user,
                    token: token,
                    password: undefined
                });
            });
        });
    },

    // Middleware
    check_token: function(req, res, next) {
        var token = req.get('Authorization');

        if (!token) {
            return res.status(401).json({message: 'Token not found'});
        }
        jwt.verify(token, consts.keyJWT,
            (err, decoded) => {
                if (err) {
                    return res.status(401)
                        .json({message: 'Wrong token. Authentication error.'});
                }
                next();
            });
    }, 


};
