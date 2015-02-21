var app     = require('../app');
var unirest = require('unirest');
var yoMama  = require('../data/yoMama');
var insults = require('../data/insults');
var routes  = {};

// GET home page
routes.index = function (req, res) {
    res.render('index.ejs', {ejsData:'EJS is working!'});
};

// GET normalize.css
routes.normalizecss = function (req, res) {
    res.sendfile(app.get('node_modules') + '/normalize.css/normalize.css');
};

routes.yoMama = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(yoMama[Math.floor(Math.random() * 1000)]));
};

routes.insults = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(insults[Math.floor(Math.random() * 1000)]));
};

// GET 404 page
routes.fileNotFound = function (req, res) {
    res.render('status/404.ejs');
};

module.exports = routes;
