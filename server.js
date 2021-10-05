const express = require("express");
const path = require("path");
const app = express();
const router = require("./app/routes/index");

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', router);
app.listen(8080);
console.log(path.join(__dirname, 'app/views'));
console.log("run");
