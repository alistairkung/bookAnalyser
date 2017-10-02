describe("analyser", function () {

  var Analyser = require('../app/analyser')
  var analyser

  beforeEach(function () {
    analyser = new Analyser()
  })

  describe("#load", function () {
    it("should return an array containing the contents of the text file", function () {
      analyser.load('spec/testbook.txt')
      expect(analyser.book).toBe('one one two three four four five')
    })
  })

})
