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
app.use('/notes', notes);
app.use(express.static('public'));
