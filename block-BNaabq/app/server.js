let express = require('express');
let cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');


let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000");
});
