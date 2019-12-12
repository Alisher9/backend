var fs = require("fs");

var data = "node js is good";

fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully written");
});
function copy() {
  fs.appendFile("output.txt", "hello world");
}
