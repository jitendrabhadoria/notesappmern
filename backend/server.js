const express = require("express");                     // including express module
const notes = require("./data/notes");                  //importing dummy notes since no DB as of now
const dotenv = require("dotenv");                       //including dotenv file

const app = express();                                  // creating an object of imported package
dotenv.config();                                        //configuring dotenv file to use

//API Endpoints as per the routes --------------------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {

    res.send("API is running..");

});

app.get("/api/notes", (req, res) => {

    res.json(notes);

});

app.get("/api/notes/:id", (req, res) => {

    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));        // actual server creation