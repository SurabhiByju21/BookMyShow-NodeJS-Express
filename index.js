const express = require("express"); //To create our express app
require('dotenv').config()
const MovieModel = require("./database/movies");
const UserModel = require("./database/users");

var cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json()); //Feature to run in json format

//Importing Mongoose
var mongoose = require('mongoose');
//Set up deault mongoose connection
var mongoDB = 'mongodb+srv://surabhi_byju:m6V9o24EZkPdFPrl@cluster0.vtulq.mongodb.net/book-my-show?retryWrites=true&w=majority';
//After promise is resolved
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("CONNECTION ESTABLISHED"));



app.get("/", async (req, res) => {
    const getAllMovies = await MoviesModel;
    return res.json({"WELCOME": `To my backend software of BookMyShow`}); //Return to user
});

//http://localhost:5000/movies
app.get("/movies", async (req, res) => {
    const getAllMovies = await MovieModel.find();
    return res.json(getAllMovies); //Return to user
});

//http://localhost:5000/movies/:id
app.get("/movies/:id", async (req, res) => {
    const {id} = req.params;
    const getMovie = await MovieModel.findOne({_id: id});
    return res.json(getMovie);
});

//http://localhost:5000/user-register
app.post("/user-register", async (req, res) => {
    const addNewUser = await UserModel.create(req.body);
    return res.json( {userAdded: addNewUser, message:"User is Added!!!"} );
});

app.listen(5000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
})
