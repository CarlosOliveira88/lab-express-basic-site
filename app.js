const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/home", (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/photosGallery", (req, res, next) => {
    res.sendFile(__dirname + "/views/photoGallery.html");
});

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/views/works.html");
});



















// Siempre al final
app.listen(3000, () => {
    console.log("Server iniciado en puerto 3000");
});