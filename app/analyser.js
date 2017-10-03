function Analyser(){
  this.book = null
}

Analyser.prototype.load = function (bookPath) {
  var fs = require("fs");
  this.book = fs.readFileSync(bookPath)
    .toString('utf-8').trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/[\n]/g, ' ')
    .toLowerCase()
};

module.exports = Analyser;
