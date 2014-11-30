var fs = require('fs')

var filename = process.argv[2];

file = fs.readFileSync(filename);

catPowers = file.toString();

console.log(catPowers.split('\n').length -1);