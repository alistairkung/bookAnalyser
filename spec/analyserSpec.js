describe("analyser", function () {

  var Analyser = require('../app/analyser')

  beforeEach(function () {
    analyser = new Analyser()
    analyser.load('spec/testbook.txt')
  });

  describe("#load", function () {
    it("should return a prepared string from the text file", function () {
      expect(analyser.book).toBe('one one one two three four four five one')
    });
  });

  describe("#setWordFrequencies", function() {
    it("should create an object with each individual word appearing in the book and the frequency of occurences", function () {
      expect(analyser.frequencies).toEqual({
        one : 4,
        two : 1,
        three : 1,
        four : 2,
        five : 1
      })
    });
  });

  describe("#outputAnalysis", function (){
    it("should output each indvidual word and an associated frequency in JSON", function () {
      expect(analyser.outputAnalysis()).toEqual({
        "one":{frequency: 4, prime:false},
        "two":{frequency: 1, prime:true},
        "three":{frequency: 1, prime:true},
        "four":{frequency: 2, prime:true},
        "five":{frequency: 1, prime:true}
      })
    });
  });
});
