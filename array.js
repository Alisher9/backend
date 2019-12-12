function common(number){
  var factors = [];
  for(var i = 1; i < number; i++){
    if(number % i == 0)
      factors.push(i);
  }
  return factors;
}
var number = Array(100,200,50,20);

function start() {
  var factors = common();
  for(var i =factors.length()-1; i>0; i--) {
    if (y % factors[i] != 0)
     factors.splice(i, 1);
 }
 console.log(factors);

  }
start();
