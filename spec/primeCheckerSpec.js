describe("primeChecker", function () {

  var PrimeChecker = require('../app/primeChecker')

  beforeEach(function () {
    primechecker = new PrimeChecker()
  });

  describe("#isPrime", function () {
    it("should return true if the number is 2", function () {
      expect(primechecker.isPrime(2)).toEqual(true)
    });

    it("should return true if the number is 3", function () {
      expect(primechecker.isPrime(2)).toEqual(true)
    });

    it("should return false if the number is divisible by 2", function () {
      expect(primechecker.isPrime(50)).toEqual(false)
    });

    it("should return true for a prime number", function () {
      expect(primechecker.isPrime(293)).toEqual(true)
    });

    it("should return false for a non prime number", function () {
      expect(primechecker.isPrime(177)).toEqual(false)
    });
  });
});
