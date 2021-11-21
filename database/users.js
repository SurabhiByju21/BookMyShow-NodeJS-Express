const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    username: String,
    emailaddress: String,
    password: String
});

const UsersModel = mongoose.model("movies", UsersSchema);

module.exports = UsersModel;