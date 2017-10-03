describe("analyser", function () {

  var Analyser = require('../app/analyser')

  beforeEach(function () {
    analyser = new Analyser()
  })

  describe("#load", function () {
    it("should return a prepared string from the text file", function () {
      analyser.load('spec/testbook.txt')
      expect(analyser.book).toBe('one one two three four four five')
    })
  })

})
