// Require the build in 'assertion' library

var assert = require('assert');

// Create a test suite group called Math


describe('Math', function() {

// Test one: checking if two numbers are added if operator is +

it('should test if 3+3 = 6', function(){
  // our actual test: 3+3 should be equal to 6
   assert.equal(6, 3+3);
});

// Test Two: checking if second number is subtracted from first number if operator is -


it('should test if 5-3 = 2', function(){
  // our actual test: 5-3 should be equal to 2
   assert.equal(2, 5-3);
});
});
