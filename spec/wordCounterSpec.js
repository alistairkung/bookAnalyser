describe("wordCounter", function () {

  var wordCounter = require('../app/wordCounter')

  beforeEach(function () {
    wordCounter = new wordCounter()
  });

  describe("#count", function () {
    it("should return an object containing each word in the string and a frequency", function () {
      sentence = "one one two three four four five"
      wordCounter.count(sentence)
      expect(wordCounter.wordcount).toEqual({ "one": 2, "two": 1, "three": 1, "four": 2, "five": 1})
    });
  });
});
