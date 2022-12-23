let express = require('express');



let app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get("/", (req, res) => {
    res.send("hello World");
})

app.listen(4000, () => {
    console.log("The Server is Up and Running at http://localhost:4000");
});