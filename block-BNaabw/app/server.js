let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");

let app = express();




app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.use(logger("combined"));
app.use(cookieParser());


var dirOption = {
    root: "."
};
app.get("/", (req, res) => {
    res.sendFile("index.html", dirOption, (err) => {
        if (err) {
            next(err);
        } else {
            
        }
    });
});

app.get("/users", (req, res) => {
    res.send("I am from the /users route");
});


// 404 Middleware
app.use((req, res, next) => {
    res.send("The requested page is unavailable");
});




app.listen(3000, () => {
    console.log("The Server is up and running http://localhost:3000");
});