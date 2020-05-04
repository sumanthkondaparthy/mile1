/**
 *
 * @namespace faker.cars
 */
var cars = function (faker) {
  var self = this;
  var fake = faker.fake;

  
  /**
   *suv
   *
   * @method faker.cars.suv
   */
  self.suv = function () {
    return faker.random.arrayElement(faker.definitions.cars.suv);
  };

  self.suv.schema = {
    "description": "Generates a cars suv.",
    "sampleResults": ["xuv 500", "audi", "bmw"]
  };


  /**
   * hatchback
   *
   * @method faker.cars.hatchback
   */
  self.hatchback= function () {
    return faker.random.arrayElement(faker.definitions.cars.hatchback);
  };

  self.hatchback.schema = {
    "description": "Generates a cars hatchback.",
    "sampleResults": ["polo", "swift", "figo"]
  };

  /**
   * sedan
   *
   * @method faker.cars.sedan
   */
  self.sedan = function () {
    return faker.random.arrayElement(faker.definitions.cars.sedan);
  };

  self.sedan.schema = {
    "description": "Generates a cars sedan",
    "sampleResults": ["vento", "verna", "fiat"]
  };

  
  

  
  };


module["exports"] = cars;
