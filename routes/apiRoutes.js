const router = require('express').Router();
var fs = require('fs');
const uuidv1 = require('uuidv1');

// GET /api/notes should read the db.json file and return all  saved notes as JSON
router.get('/notes', (req,res)=>{
    fs.readFile('./db/db.json', "utf8", function(err, data){
        if(err) throw err;

        res.json(JSON.parse(data));
    }); 
});

router.post('/notes', (req, res) => {
    // Log that a POST request was received
    fs.readFile('./db/db.json', "utf8", function(err, data){
        if(err) throw err;
        
        var n = JSON.parse(data);
        n.push({"title": req.body.title, "text": req.body.text, "id": uuidv1()});

        fs.writeFile("./db/db.json", JSON.stringify(n), function(errr){
            if(err) throw err;
            console.log("Note has been added");
        })
        res.json(n);
    }); 
  });

module.exports = router;