var wordCounter = require('../app/wordCounter')
var PrimeChecker = require('../app/primeChecker')

function Analyser(){
  this.book = null
  this.wordCounter = new wordCounter
  this.primeChecker = new PrimeChecker
  this.frequencies = null
}

Analyser.prototype.load = function (bookPath) {
  var fs = require("fs");
  this.book = fs.readFileSync(bookPath)
    .toString('utf-8')
    .trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")
    .replace(/[\n]/g, ' ')
    .toLowerCase()
  this._setWordFrequencies();
};

Analyser.prototype.outputAnalysis = function () {
  var result = {}
  for (var word in this.frequencies) {
    result[[word]] = {frequency:this.frequencies[word], prime:this.primeChecker.isPrime(this.frequencies[word])}
  }
  return result
};

Analyser.prototype._setWordFrequencies = function() {
  this.wordCounter.count(this.book)
  this.frequencies = this.wordCounter.wordcount
};


module.exports = Analyser;
