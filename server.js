const express = require('express')
const app = express()
let ans = []
let score = 0

const request = require('request')
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/mhealth.ejs", function (req, res) {
    res.render("mhealth.ejs");
});


app.get("/mhealth2.ejs", function (req, res) {
    score = 0
    for (var data in req.query) {
        if (req.query.hasOwnProperty(data)) {
            if (req.query[data] === 'second')
                score = score + 1
            else if (req.query[data] === 'third')
                score = score + 2
            else if (req.query[data] === 'fourth')
                score = score + 3
        }
    }

    res.render("mhealth2.ejs");
});

app.get("/mhealthres.ejs", function (req, res) {

    for (var data in req.query) {
        if (req.query.hasOwnProperty(data)) {
            if (req.query[data] === 'second')
                score = score + 1
            else if (req.query[data] === 'third')
                score = score + 2
            else if (req.query[data] === 'fourth')
                score = score + 3
        }
    }

    res.render("mhealthres.ejs", { score, score });
});

app.get("/phealth", function (req, res) {
    res.render("phealth")
});

app.get("/phealth2", function (req, res) {
    score = 0
    for (var data in req.query) {
        if (req.query.hasOwnProperty(data)) {
            if (req.query[data] === 'second')
                score = score + 1
            else if (req.query[data] === 'third')
                score = score + 2
            else if (req.query[data] === 'fourth')
                score = score + 3
        }
    }

    res.render("phealth2");
});

app.get("/phealthres", function (req, res) {

    for (var data in req.query) {
        if (req.query.hasOwnProperty(data)) {
            if (req.query[data] === 'second')
                score = score + 1
            else if (req.query[data] === 'third')
                score = score + 2
            else if (req.query[data] === 'fourth')
                score = score + 3
        }
    }

    res.render("phealthres", { score, score });
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/signup", function (req, res) {
    res.render("signup");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000.")
});