let express = require("express");
let path = require('path');
let logger = require("morgan");

let app = express();




app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger("common"));

let options = {
    root: path.join(__dirname)
};

app.get("/", (req, res) => {
    
    res.sendFile("index.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {
            // console.log("File Served Successfully!");
        }
    });

});

app.get("/new", (req, res) => {
    res.sendFile("new.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {

        }
    });
});

app.post("/new", (req, res) => {
    if (req.body) {
        res.send(req.body);
    }
});

app.get("/users/:username", (req, res) => {
    res.send(req.params.username);
});

app.get("/users", (req, res) => {
    if(req.query) {
        console.log(req.query);
        res.send(req.query);
    }
    
});







app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000");
});