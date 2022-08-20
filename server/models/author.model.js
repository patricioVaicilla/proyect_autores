const mongoose = require('mongoose');

const AuthorScheme = new mongoose.Schema({
    Name: {
        type: String,
        require: [true, 'name is mandatory']
    },
});

const Author=mongoose.model('Author',AuthorScheme);
module.exports=Author;