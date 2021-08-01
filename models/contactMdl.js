// Require the mongoose module
var mongoose = require('mongoose');
// const { Schema } = mongoose;
// Set up a mongoose connection
// var mongoDB = 'mongodb://localhost:27017/blog';
var mongoDB = "mongodb+srv://mongo_user:delhi1234@cluster0.qygnh.mongodb.net/blog?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the connection
var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log("This is Contact model")
});

// const uniqueValidator = require("mongoose-unique-validator");

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: "Please enter the your first name.",

        trim: true,

    },
    lastname: {
        type: String,
        required: "Please enter your last name.",
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: "Email is required field",
    },
    city: {
        type: String,
        required: "Please enter the your city name.",
        trim: true,
    },
    province: {
        type: String,
        required: "Please enter your province.",
        trim: true,
    },
    postalcode: {
        type: String,
        required: "Please enter the your city name.",
        trim: true,
    },
})

// const Post = mongoose.model('Post', postSchema);
// 'Post' is collection name P is capital and singular quatation
module.exports.Contact = mongoose.model('Contact', contactSchema);