const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const fetch = require("node-fetch");
const bodyParser=require("body-parser");
var dotenv = require("dotenv");

dotenv.config();
require('./db');
const app = express();
const adminApiRoutes = require('./routes/adminApiRoutes');
const logApiRoutes=require('./routes/logApiRoutes');

//BODY PARSER
app.use(bodyParser.json());

//HOME ROUTE
app.get("/", (req,res)=>{
    res.send("Message:Welcome To Library Management System");
});

//ROUTES
app.use(adminApiRoutes);
app.use(logApiRoutes);

//SERVER LISTENING ON 
const PORT = process.env.PORT || 4444
app.listen(PORT, function () {
    console.log("Server running on port:",PORT);
});






/*app.use('/', (req,res) => {
    const admins = fetch('http://localhost:4444/Library')
    .then(function (admins) {
        return admins.json();
    })
    .then(function (admins) {
        res.send(admins);
    })
});*/