if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("cars.js", function () {
  

  describe("suv()", function () {
      it("returns random suv", function () {
          sinon.stub(faker.cars, 'suv').returns('xuv 500');
          var suv = faker.cars.suv();

          assert.equal(suv, 'xuv 500');
          faker.cars.suv.restore();
      });
  });

  describe("sedan()", function () {
    it("returns random cars sedan", function () {
      sinon.stub(faker.cars, 'sedan').returns('vento');
          var sedan = faker.cars.sedan();

          assert.equal(sedan, 'vento');
          faker.cars.sedan.restore();
      });
  });

  describe("hatchback()", function () {
      it("returns random cars hatchback", function () {
          sinon.stub(faker.cars, 'hatchback').returns('polo');
          var hatchback= faker.cars.hatchback();

          assert.equal(hatchback, 'polo');
          faker.cars.hatchback.restore();
      });
  });

  

  
});
