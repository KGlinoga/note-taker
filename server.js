const express = require('express');
const { get } = require('http');
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
});

// GET * should return the index.html file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
});

// The following API routes should be created: 

// GET /api/notes should read the db.json file and return all  saved notes as JSON
app.get('/api/notes', (req,res)=>{
    res.readFile(path.join(__dirname,'./db.json'));
    return (JSON.parse('./db.json'))
});

// POST /api/notes should rec a new note to save on the req body, add to the db.json file, and return the new note to client ***each note needs a unique id when saved (there are npm pkgs for this??)
// POST request to add a review
// NOTE: Data persistence isn't set up yet, so this will only exist in memory until we implement it
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);
  
    // Destructuring assignment for the items in req.body
    const { noteTitle, noteText } = req.body;
  
    // If all the required properties are present
    if (noteTitle && noteText) {
      // Variable for the object we will save
      const addNote = {
        noteTitle,
        noteText,
      };
  
      const response = {
        status: 'success',
        body: addNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting note');
    }
  });


// boilerplate listener?? LOl we added stuff and it does NOT work 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);