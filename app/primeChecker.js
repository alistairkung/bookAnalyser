function PrimeChecker(){

};

PrimeChecker.prototype.isPrime = function(number) {
  var div = 3, limit = Math.sqrt(number);

  if (number == 2 || number == 3)
    return true;
  if (number % 2 == 0)
    return false;

  while (div <= limit) {
    if (number % div == 0)
      return false
    else
      div += 2;
    } return true
};


module.exports = PrimeChecker;
