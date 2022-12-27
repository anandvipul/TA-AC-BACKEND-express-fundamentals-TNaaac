let express = require('express');
let path = require("path");


let app = express();





// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));




// Routing

let dirOptions = {
    root: __dirname
};

app.get("/", (req, res) => {
    res.sendFile("index.html", dirOptions, (err) => {
        if (err) {
            console.log(err);
        }
    })
});

app.get("/about", (req, res) => {
    res.send("Hey This is About Page");
});

app.get("/admin", (req, res, next) => {
    next("Error Page Not Accessable");
});


// 404

app.use((req, res, next) => {
    console.log("Page Not FOund");
    res.send("Page Not FOund");
});

// Error Handler


app.use((err, req, res, next) => {
    console.log(err);
    res.send("Page Not Found");
});










app.listen(3000, () => {
    console.log("The Server is up and running at http://localhost:3000");
});