const express = require("express");
var router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('index', { title: "Home" });
});

router.get('/home', (req, res, next) =>{
    res.render('index', { title: "Home" });
});

router.use('/about_me', (req, res) => {
    res.render('index', { title: "About Me" });
});

router.use("/contact_me", (req, res) => {
    res.render('index', { title: "Contact Me" });
});

router.use("/project", (req, res) => {
    res.render('index', { title: "Project" });
});

router.use("/services", (req, res) => {
    res.render('index', { title: "Services" });
});

module.exports = router;
