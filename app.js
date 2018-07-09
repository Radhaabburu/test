/* Date created: 07/07/2018
created by Radha Abburu for exerciseForTestTeamCandidates
The program takes in 3 arguments - operator and 2 values and depending on the operators does the math.
*/

// creating an empty object mycalculator to expose the calculate function  using module.exports

let mycalculator = {};

 mycalculator.calculate = function(operator,value1,value2) {

  if ((isNaN(value1)) || (isNaN(value2))  || (!value1 ) || (!value2)) {
        var err_msg = "Number entered is not valid number. Please enter a valid number";
        console.log(err_msg);
        }
	
  else
  {
    console.log('values entered are valid numbers.');

  switch (operator)
   {		
    case "+": {
            var cal_add = value1 + value2;
	    console.log('operator is add:' + cal_add);
	    break;	
	    } 		

    case "-" : {
           var cal_minus = value1 - value2;
           console.log('Operator is subtract:' + cal_minus);
           break;
           }

   case '*': {
 	   var cal_multiply = (value1 * value2);
           console.log('Operator is multiplication:' + cal_multiply);
           break;
           } 

   case '/': {
 	   var cal_division = (value1 / value2);
           console.log('Operator is division:' + cal_division);
           break;
           }
   default : {
	    var error_message = "Operator entered is not supported. Please enter either add or subtract or multiply or division";
       	    //console.log('Operator entered is not supported. Please enter either add or subtract or multiply or division');
	    console.log(error_message);
  	   } 
     }
  }
}
module.exports = mycalculator;
