function wordCounter(){
  this.wordcount = {}
};

wordCounter.prototype.count = function(sentence) {
  var allWords = this._findAllWords(sentence);
  this._countWords(allWords);
};

wordCounter.prototype._findAllWords = function(string) {
  return string.match(/\w+/g);
};

wordCounter.prototype._countWords = function(arr) {
  var frequencies = {};
  arr.forEach(function(w){
    if (!frequencies[w]) {
      frequencies[w] = 0;
    }
    frequencies[w] += 1;
  });
  this.wordcount = frequencies;
};


module.exports = wordCounter;
