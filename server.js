const express = require('express');
const { get } = require('http');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// this allows us to use the path method for creating/linking to new files
const path = require('path');
const app = express();

// I think this links the file where we save new notes
// const notes = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;

// based on folder 22 comments. not sure if these 2 are necessary for note taker.. seems like boilerplate
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// this puts the notes in a url that ends in /notes. I think?? 
// app.use('/notes', notes); <~~throws an error??
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// From the README:

// The following API routes should be created: 



// POST /api/notes should rec a new note to save on the req body, add to the db.json file, and return the new note to client ***each note needs a unique id when saved (there are npm pkgs for this??)
// POST request to add a review
// NOTE: Data persistence isn't set up yet, so this will only exist in memory until we implement it



// boilerplate listener?? LOl we added stuff and it does NOT work 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);