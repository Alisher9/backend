const User = {
  name: "Alisher",
  surname: "Sattarbek"
};
module.exports = User;

var fir = function(name) {
  return "hi this is first text " + name;
}
var sec = function(name) {
  return "hi this is second text "  + name;
}

module.exports = {
  second: sec,
  first: fir
}
var fact = function(n) {
  if (n == 0){
    return 1;
  }else {
    return fact(n-1)*n;
  }
}
module.exports = fact;
