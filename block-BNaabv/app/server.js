let express = require("express");
let path = require("path");

let app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
    res.send("<h2>hello </h2>");
});

app.get("/about", (req, res) => {
    res.send("<h2>My Name is Qwerty</h2>");
});


// 404 
app.use((req, res, next) => {
    res.send("404");
});

// error handler

app.use((err, req, res, next) => {
    console.log(err);
    res.send("Unauthorized Access");
});

app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000")
});