const express = require("express");
const app = express();

app.get("/home", function(req, res){
    res.send("Hello Word")
});

app.listen(3000);