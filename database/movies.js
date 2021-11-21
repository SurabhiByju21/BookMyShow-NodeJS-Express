const mongoose = require("mongoose");
// const { Schema } = mongoose;
// mongoose.Promise = global.Promise;

const MoviesSchema = mongoose.Schema({
    id: String,
    imageurl: String,
    actor: String
});

const MoviesModel = mongoose.model("Movies", MoviesSchema);

module.exports = MoviesModel;

// module.exports =
//     mongoose.models.Movies || mongoose.model('Movies', MoviesSchema);