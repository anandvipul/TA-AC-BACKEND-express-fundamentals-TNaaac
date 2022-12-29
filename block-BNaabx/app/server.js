let express = require("express");


let app = express();



app.use((req, res, next) => {
    let method = req.method;
    let url = req.url;
    let time = Date();
    console.log(`A ${method} on ${url} at ${time}`);
    next();
});

app.use((req, res, next) => {
    let store = "";
    console.log("Hi");
    req.on("data", (chunk) => {
        store += chunk;
    });

    req.on("end", () => {
        // console.log(store);
        req.json = store;
        console.log(req.json);
    });
    next();
});



app.get("/", (req, res) => {
    res.send("Hello There");
    console.log(req.body);
});






app.listen(4000, () => {
    console.log("The Server is up and running at http://localhost:4000");
});