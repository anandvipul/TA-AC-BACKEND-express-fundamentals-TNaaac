let express = require("express");
let path = require('path');


let app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


app.post("/json", (req, res) => {
    console.log(req.body);
});

app.post("/contact", (req, res) => {
    console.log(req.body);
});



app.listen(3000, () => {
    console.log("The Server is up and running at http://localhost:3000");
});