describe("analyser", function () {

  var Analyser = require('../app/analyser')

  beforeEach(function () {
    analyser = new Analyser()
    analyser.load('spec/testbook.txt')
    analyser.setWordFrequencies();
    analyser.setUniqueFrequencies();
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

  describe("#setUniqueFrequencies", function (){
    it("should create an array of unique frequencies", function (){
      expect(analyser.uniqueFrequencies).toEqual([4,1,2])
    })
  })

  describe("#setPrimeFrequencyMap", function(){
    it("should create a hash table showing the primality of all unique frequencies", function (){
      analyser.setPrimeFrequencyMap();
      expect(analyser.primeArray).toEqual([1,2])
    })
  })

  describe("#outputAnalysis", function (){
    it("should output each indvidual word and an associated frequency in JSON", function () {
      expect(analyser.outputAnalysis()).toEqual({
        "one":{frequency: 4},
        "two":{frequency: 1},
        "three":{frequency: 1},
        "four":{frequency: 2},
        "five":{frequency: 1}
      })
    });
  });
});
