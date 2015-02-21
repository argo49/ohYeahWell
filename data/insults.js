var fs = require('fs');
module.exports = fs.readFileSync('./data/insults.txt').toString().split('\n');