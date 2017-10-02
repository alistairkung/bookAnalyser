function Book() {

}

Book.prototype.loadBook = function(bookPath, callback) {
  var fs = require("fs");
  fs.readFile(bookPath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    callback(data)
  });
};

module.exports = Book;
