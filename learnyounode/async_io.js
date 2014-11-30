var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, 'utf-8', function(err, data) {
  console.log(data.toString().split('\n').length - 1);
  // ('\n') split by new line but since it adds an extra we -1.
});