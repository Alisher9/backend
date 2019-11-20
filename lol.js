const fs = require('fs');

var string = fs.readFileSync('temp.txt');
string += " Hello world";
fs.writeFile("output.txt", string, function(err) {

    if(err)  return console.log(err);
    console.log("Successfully");
});
