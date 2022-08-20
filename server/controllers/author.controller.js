// const { response } = require('express');
// const { request } = require('http');
const Author = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json({ insertedAuthor: author, msg: 'Succesful creation' }))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors = (_, response) => {
    Author.find({})
        .then(retriviedauthors => response.json(retriviedauthors))
        .catch(err => response.json(err))
}
module.exports.getAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(authorDeleted => response.json(authorDeleted))
        .catch(err => response.json(err))
}