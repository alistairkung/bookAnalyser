var wordCounter = require('../app/wordCounter')
var PrimeChecker = require('../app/primeChecker')

function Analyser(){
  this.book = null
  this.wordCounter = new wordCounter
  this.primeChecker = new PrimeChecker
  this.frequencies = null
  this.uniqueFrequencies = []
  this.primeArray = []
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
  this._setUniqueFrequencies();
  this._setPrimeFrequencyMap();
};

Analyser.prototype.outputAnalysis = function () {
  var result = {}
  for (var word in this.frequencies) {
    result[[word]] = {frequency:this.frequencies[word], prime:this._isFrequencyPrime(this.frequencies[word])}
  }
  return result
};

Analyser.prototype._isFrequencyPrime = function (number) {
  return this.primeArray.includes(number)
};

Analyser.prototype._setWordFrequencies = function() {
  this.wordCounter.count(this.book)
  this.frequencies = this.wordCounter.wordcount
};

Analyser.prototype._setUniqueFrequencies = function () {
  var allFreq = this._values(this.frequencies)
  this.uniqueFrequencies = allFreq.filter(this._uniqueArrFilter)
};

Analyser.prototype._setPrimeFrequencyMap = function () {
  var self = this
  this.uniqueFrequencies.forEach(function(f){
    if (self.primeChecker.isPrime(f) === true) {
      self.primeArray.push(f)
    };
  });
};

Analyser.prototype._values = function(obj) {
  var keys = Object.keys(obj);
  var arr = []
  for (var i = 0; i < keys.length; i++) {
      var val = obj[keys[i]];
      arr.push(val)
  }
  return arr
};

Analyser.prototype._uniqueArrFilter = function(value, index, self) {
  return self.indexOf(value) === index;
};

module.exports = Analyser;
