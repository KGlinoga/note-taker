const express = require('express');
const { get } = require('http');
// this allows us to have separate files for each type of route
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// this allows us to use the path method for creating/linking to new files
const path = require('path');
const app = express();

// this links the file where we save new notes

const PORT = process.env.PORT || 3001;

// boilerplate
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);




app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);