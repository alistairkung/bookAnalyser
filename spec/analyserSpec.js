describe("analyser", function () {

  var Analyser = require('../app/analyser')

  beforeEach(function () {
    analyser = new Analyser()
    analyser.load('spec/testbook.txt')
  })

  describe("#load", function () {
    it("should return a prepared string from the text file", function () {
      expect(analyser.book).toBe('one one two three four four five')
    })
  })

  describe("#displayWordFrequencies", function() {
    it("should output each individual word appearing in the book and the frequency of occurences", function () {
      expect(analyser.displayWordFrequencies()).toEqual({ "one": 2, "two": 1, "three": 1, "four": 2, "five": 1})
    })
  })

})
