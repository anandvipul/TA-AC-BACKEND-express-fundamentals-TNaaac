let express = require('express');
const cookieParser = require('cookie-parser');
let morgan = require('morgan');


let app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.use(cookieParser());
app.use("/about", (req, res, next) => {
    res.cookie("username", "amigos");
    res.end("About Page");
    next();
});

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
});

app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000");
});
