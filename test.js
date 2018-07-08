let mycalculator = require('../app.js')
let assert = require('assert');

describe('Test cases for program calculations', function() {

  describe('Test cases for function  Add', function() {
 
  // Test 1: test when both  numbers are  valid - integers  and operator is supported by the program 

   it('should test if 5+3 = 8', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',5,3));
     });
  
   // Test 2: test when both numbers have  decimals

     it('should test if 2.5+3.2 = 5.7', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',2.5,3.2));
     });

    // Test 3: test when both numbers are extra large (12300000)  and given in scientific exponent notation

     it('should test if 123e5+123e5 = 24600000', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',123e5,123e5));
     });

    // Test 4: test when both numbers are extra small(0.00123) and given in scientific exponent notation

     it('should test if 123e-5+123e-5 =0.00246', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',123e-5,123e-5));
     });

  // Test 5: test when both numbers are valid but operator is not supported by the program 

    it('should test if valid numbers with unsupported operator gives an error message', function() {
     assert.equal(mycalculator.error_message, mycalculator.calculate('%',5,3));
     });

  // Test 6: test if first number is a letter and second number is a valid number

   it('should test if a+3 gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',"a",3));
     });

   // Test 7: test if second  number is a letter and first number is a valid number

    it('should test if 5+a gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',5,"a"));
     });

    // Test 8: test if both  numbers are letters with valid operator

    it('should test if a+b gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',"a","b"));
     });

    // Test 9: test if first number is  null and second number is a valid number

     it('should test if no number +3 gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',"",3));
     });

    // Test 10: test if second  number is null and first number is valid

    it('should test if 5+ null gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',5,""));
     });

    // Test 11: test if first number is a special character


     it('should test if *+3 returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',"*",3));
     });

     // Test 12: test if second number is a special character 

     it('should test if 5+* returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',5,"*"));
     });

    // Test 13: test if both numbers are spcial characters

     it('should test if *+* returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('+',"*","*"));
     });


     // Test 14: test when first number is with decimals

     it('should test if 2.5+3 = 5.5', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',2.5,3));
     });

    // Test 15: test when second number is with decimals

    it('should test if 5+3.2 = 8.2', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',5,3.2));
     });

    //Test 16: test when both numbers are zeros

     it('should test if 0+0 = 0', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',0,0));
     });

    // Test 17: test when numbers are negative 

    it('should test if (-5)+(-3) = -8', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',-5,-3));
     });


  // Test 18: test when one number is negative and one number is positive

    it('should test if (-5)+(3) = -2', function() {
     assert.equal(mycalculator.cal_add, mycalculator.calculate('+',-5,3));
     });


    // Test 19: test when no parameters are passed 

    it('should test if undefined is retured when no parameters are passed', function() {
     assert.equal(undefined, mycalculator.calculate());
     });

 });

  describe('Test Cases for function  Subtractions', function() {


  // Test 1: test when both  numbers are  valid - integers  and operator is supported by the program

   it('should test if 5-3 = 2', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',5,3));
     });

   // Test 2: test when both numbers have  decimals

     it('should test if 3.5-3.2 = 0.3', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',3.5,3.2));
     });

    // Test 3: test when both numbers are extra large (12300000)  and given in scientific exponent notation

     it('should test if 123e5-123e5 = 0', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',123e5,123e5));
     });

    // Test 4: test when both numbers are extra small(0.00123) and given in scientific exponent notation

     it('should test if 123e-5-123e-5 =0', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',123e-5,123e-5));
     });

  // Test 5: test when both numbers are valid but operator is not supported by the program

    it('should test if valid numbers with unsupported operator gives an error message', function() {
     assert.equal(mycalculator.error_message, mycalculator.calculate('%',5,3));
     });

  // Test 6: test if first number is a letter and second number is a valid number

   it('should test if a-3 gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',"a",3));
     });

   // Test 7: test if second  number is a letter and first number is a valid number

    it('should test if 5-a gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',5,"a"));
     });

    // Test 8: test if both  numbers are letters with valid operator

    it('should test if a-b gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',"a","b"));
     });

    // Test 9: test if first number is  null and second number is a valid number

     it('should test if null-3 gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',"",3));
     });

    // Test 10: test if second  number is null and first number is valid

    it('should test if 5- null gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',5,""));
     });

    // Test 11: test if first number is a special character


     it('should test if *-3 returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',"*",3));
     });

     // Test 12: test if second number is a special character

     it('should test if 5-* returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',5,"*"));
     });

    // Test 13: test if both numbers are special characters

     it('should test if *-* returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('-',"*","*"));
     });


     // Test 14: test when first number is with decimals

     it('should test if 2.5-1 = 1.5', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',2.5,1));
     });

    // Test 15: test when second number is with decimals

    it('should test if 5-3.2 = 1.8', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',5,3.2));
     });

    //Test 16: test when both numbers are zeros

     it('should test if 0-0 = 0', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',0,0));
     });

    // Test 17: test when numbers are negative

    it('should test if (-5)-(-3) = -2', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',-5,-3));
     });


  // Test 18: test when one number is negative and one number is positive

    it('should test if (-5)-(3) = -8', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',-5,3));
     });


 // Test 19: test when second number is greater then first number

    it('should test if 3-5 = -2', function() {
     assert.equal(mycalculator.cal_minus, mycalculator.calculate('-',3,5));
     });


    // Test 20: test when no parameters are passed

    it('should test if undefined is displayed when no parameters are given', function() {
     assert.equal(undefined, mycalculator.calculate());
     });

});


  describe('Test Cases for function Multiplications', function() {


  // Test 1: test when both  numbers are  valid - integers  and operator is supported by the program

   it('should test if 5*3 = 15', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',5,3));
     });

   // Test 2: test when both numbers have  decimals

     it('should test if 3.5*3.2 = 11.2', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',3.5,3.2));
     });

    // Test 3: test when both numbers are extra large (12300000)  and given in scientific exponent notation

     it('should test if 123e5*123e5 = 151290000000000', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',123e5,123e5));
     });

    // Test 4: test when both numbers are extra small(0.00123) and given in scientific exponent notation

     it('should test if 123e-5*123e-5 =0.0000015129', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',123e-5,123e-5));
     });

  // Test 5: test when both numbers are valid but operator is not supported by the program

    it('should test if valid numbers with unsupported operator gives an error message', function() {
     assert.equal(mycalculator.error_message, mycalculator.calculate('%',5,3));
     });

  // Test 6: test if first number is a letter and second number is a valid number

   it('should test if a*3 gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',"a",3));
     });

   // Test 7: test if second  number is a letter and first number is a valid number

    it('should test if 5*a gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',5,"a"));
     });

    // Test 8: test if both  numbers are letters with valid operator

    it('should test if a*b gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',"a","b"));
     });

    // Test 9: test if first number is  null and second number is a valid number

     it('should test if null*3 gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',"",3));
     });

    // Test 10: test if second  number is null and first number is valid

    it('should test if 5* null gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',5,""));
     });

    // Test 11: test if first number is a special character


     it('should test if **3 returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',"*",3));
     });

     // Test 12: test if second number is a special character

     it('should test if 5** returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',5,"*"));
     });

    // Test 13: test if both numbers are spcial characters

     it('should test if *** returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('*',"*","*"));
     });


     // Test 14: test when first number is with decimals

     it('should test if 2.5*1 = 2.5', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',2.5,1));
     });

    // Test 15: test when second number is with decimals

    it('should test if 5*3.2 = 16', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',5,3.2));
     });

    //Test 16: test when both numbers are zeros

     it('should test if 0*0 = 0', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',0,0));
     });

	//Test 17: test when one numbers are zeros

     it('should test if 15*0 = 0', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',15,0));
     });

    // Test 18: test when numbers are negative

    it('should test if (-5)*(-3) = 15', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',-5,-3));
     });


  // Test 19: test when one number is negative and one number is positive

    it('should test if (-5)*(3) = -15', function() {
     assert.equal(mycalculator.cal_multiply, mycalculator.calculate('*',-5,3));
     });



    // Test 20: test when no parameters are passed

    it('should test if undefined is displayed when no parameters are given', function() {
     assert.equal(undefined, mycalculator.calculate());
     });

});


  describe('Test Cases for function Divisions', function() {


  // Test 1: test when both  numbers are  valid - integers  and operator is supported by the program

   it('should test if 6/3 = 2', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',6,3));
     });

   // Test 2: test when both numbers have  decimals

     it('should test if 3.5/3.2 = 1.09375', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',3.5,3.2));
     });

    // Test 3: test when both numbers are extra large (12300000)  and given in scientific exponent notation

     it('should test if 123e5/123e5 = 1', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',123e5,123e5));
     });

    // Test 4: test when both numbers are extra small(0.00123) and given in scientific exponent notation

     it('should test if 123e-5/123e-5 =1', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',123e-5,123e-5));
     });

  // Test 5: test when both numbers are valid but operator is not supported by the program

    it('should test if valid numbers with unsupported operator gives an error message', function() {
     assert.equal(mycalculator.error_message, mycalculator.calculate('%',5,3));
     });

  // Test 6: test if first number is a letter and second number is a valid number

   it('should test if a/3 gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',"a",3));
     });

   // Test 7: test if second  number is a letter and first number is a valid number

    it('should test if 5/a gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',5,"a"));
     });

    // Test 8: test if both  numbers are letters with valid operator

    it('should test if a/b gives error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',"a","b"));
     });

    // Test 9: test if first number is  null and second number is a valid number

     it('should test if null/3 gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',"",3));
     });

    // Test 10: test if second  number is null and first number is valid

    it('should test if 5/ null gives an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',5,""));
     });

    // Test 11: test if first number is a special character


     it('should test if */3 returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',"*",3));
     });

     // Test 12: test if second number is a special character

     it('should test if 5/* returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',5,"*"));
     });

    // Test 13: test if both numbers are spcial characters

     it('should test if */* returns an error message', function() {
     assert.equal(mycalculator.err_msg, mycalculator.calculate('/',"*","*"));
     });


     // Test 14: test when first number is with decimals

     it('should test if 2.5/1 = 2.5', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',2.5,1));
     });

    // Test 15: test when second number is with decimals

    it('should test if 5/3.2 = 1.5625', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',5,3.2));
     });

    //Test 16: test when both numbers are zeros

     it('should test if 0/0 = 0', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',0,0));
     });

	//Test 17: test when first number is zeros

     it('should test if 0/5 = 0', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',0,5));
     });


     //Test 18: test when second number is zero

     it('should test if 5/0 = not a number', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',5,0));
     });
     

    // Test 19: test when numbers are negative

    it('should test if (-4)/(-2) = 2', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',-4,-2));
     });


  // Test 20: test when one number is negative and one number is positive

    it('should test if (6)/(-3) = -2', function() {
     assert.equal(mycalculator.cal_division, mycalculator.calculate('/',6,-3));
     });



    // Test 21: test when no parameters are passed

    it('should test if undefined is displayed when no parameters are given', function() {
     assert.equal(undefined, mycalculator.calculate());
     });
 });
});
