// const { response } = require('express');
// const { request } = require('http');
const Author = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
    const { userName, email } = request.body;
    Author.create({
        userName, email
    })
        .then(user => response.json({ insertedUser: user, msg: 'Succesful creation' }))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllUsers = (_, response) => {
    User.find({})
        .then(retriviedusers => response.json(retriviedusers))
        .catch(err => response.json(err))
}
module.exports.getUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(err => response.json(err))
}
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.json(err))
}
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(userDeleted => response.json(userDeleted))
        .catch(err => response.json(err))
}