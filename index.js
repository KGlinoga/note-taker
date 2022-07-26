const express = require('express');
// this allows us to use the path method for creating/linking to new files
const path = require('path');
const app = express();

// I think this links the file where we save new notes
const notes = require('./Develop/db/db.json');

const PORT = 3001;

// based on folder 22 comments. not sure if these 2 are necessary for note taker.. seems like boilerplate
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// this puts the notes in a url that ends in /notes. I think?? 
// app.use('/notes', notes); <~~throws an error??
app.use(express.static('public'));

// From the README: 

// GET /notes shoudl return the notes.html file
app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'./notes.html'))
})

// GET * should return the index.html file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

// The following API routes should be created: 

// GET /api/notes should read the db.json file and return all  saved notes as JSON
// POST /api/notes should rec a new note to save on the req body, add to the db.json file, and return the new note to client ***each note needs a unique id when saved (there are npm pkgs for this??)