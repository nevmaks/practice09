var express = require('express');
var app = express();

app.all('/grid', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.all('/detail', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var gridRecords = [
        {firstName: "John", lastName: "Doe", active: false, id: 1},
        {firstName: "Mary", lastName: "Moe", active: false, id: 2},
        {firstName: "Peter", lastName: "Noname", active: true, id: 3}
    ],
    detailsRecords = [{
        id:1,
        name:"John Doe",
        about:"Nice guy",
        hobby:"Likes drinking wine",
        skills:["html", "javascript", "redux"]
    },{
        id:2,
        name:"Mary Moe",
        about:"Cute girl",
        hobby:"Likes playing xbox whole days long",
        skills:["Fortran", "Lua", "R#"]
    },{
        id:3,
        name:"Peter",
        about:"Awesome Developer",
        hobby:"He is the author of React.js",
        skills:["Lisp", "Om", "JS"]
    }];

app.get('/grid', function(req, res) {
    setTimeout(() => res.json(gridRecords), 2000);
});

app.get('/detail', function(req, res) {
    setTimeout(() => res.json(detailsRecords), 2000);
});

app.listen(process.env.PORT || 4730);