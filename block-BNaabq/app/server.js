let express = require('express');
let cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');


let app = express();

app.use(cookieParser());

app.use((req, res, next) => {
    req.cookies.username = "You";
});



app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000");
});
