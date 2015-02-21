var fs = require('fs');
module.exports = fs.readFileSync('./data/jokes.txt').toString().split('\n');