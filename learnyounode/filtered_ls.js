var fs = require('fs');

var dirName = process.argv[2];
var extension = process.argv[3];
// for explanation on below: http://www.brent-noorda.com/nombas/us/devspace/manual/c/html/TH_888.htm
var extFilter = RegExp('\\.' + extension + '$');

fs.readdir(dirName, function (err, list) {
  list.forEach(function (item){
    if (extFilter.test(item)) {
   	// .test() method simply returns true or false indicating whether the pattern is found in the string
      console.log(item)
    }
  });
});