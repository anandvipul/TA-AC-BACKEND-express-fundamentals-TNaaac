let express = require("express");

let app = express();

app.get ("/", (req, res) => {
    res.send("Hello on Index");
});

app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000");
});