var wordCounter = require('../app/wordCounter')

function Analyser(){
  this.book = null
  this.wordCounter = new wordCounter
}

Analyser.prototype.load = function (bookPath) {
  var fs = require("fs");
  this.book = fs.readFileSync(bookPath)
    .toString('utf-8')
    .trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/[\n]/g, ' ')
    .toLowerCase()
};

Analyser.prototype.displayWordFrequencies = function() {
  this.wordCounter.count(this.book)
  return this.wordCounter.wordcount
}

module.exports = Analyser;
