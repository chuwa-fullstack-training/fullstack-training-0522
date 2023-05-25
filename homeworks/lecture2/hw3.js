// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 == 0.3);
/**
 * The answer will be a floating-point number that is highly close to 0.3 but not exactly 0.3.
 * Cause there is a small rounding error to represent a floating-point number.
 * Therefore, '0.1 + 0.2 == 0.3' will return false;
 */

console.log(1 + "2" + "2");
/**
 * In the first plus operation, there is a implicit data type conversion. Adding a number and a string will return a string.
 * 1 + "2" => "12"
 * "12" + "2" => "122"
 */

console.log(1 +  +"2" + "2");
/**
 * Unary operator like "+"/"-" will convert the following string to a positive/negative number
 * 1 + +"2" => 3
 * 3 + "2" => "32" 
 */

console.log(1 +  -"1" + "2");
/**
 * 1 + -"1" => 0
 * 0 + "2" => "02"
 */

console.log(+"1" +  "1" + "2");
/**
 * +"1" + "1" => "11"
 * "11" + "2" => "112"
 */

console.log( "A" - "B" + "2");
/**
 * operator("-") expects number in both sides. 
 * It will conduct implicit type conversion to get a number type if neither operand isn't number.
 * "A" & "B" cannot convert to a number so return NaN.
 * "A" - "B" => NaN
 * NaN + "2" => "NaN2"
 */

console.log( "A" - "B" + 2);
/**
 * Conduct operation with NaN always get NaN
 * "A" - "B" => NaN
 * NaN + 2 => NaN
 */

console.log("0 || 1 = "+(0 || 1));
/**
 * 0 represent 'false' and positive number represent 'true'
 * 0 || 1 => 1
 * "0 || 1 =" + 1 => "0 || 1 = 1"
 */

console.log("1 || 2 = "+(1 || 2));
/**
 * if first operand in || is true, it will return the first operand
 * 1 || 2 => 1
 * "1 || 2 = " + 1 = "1 || 2 = 1"
 */

console.log("0 && 1 = "+(0 && 1));
/**
 * if both operands are true in &&, return true/second operand, else return false/0
 * 0 && 1 => 0
 * "0 && 1 = " + 0 => "0 && 1 = 0"
 */

console.log("1 && 2 = "+(1 && 2));
/**
 * 1 && 2 => 2;
 * "1 && 2 = " + 2 => "1 && 2 = 2"
 */

console.log(false == '0')
/**
 * == will conduct implicit tyep conversion to change two operand to the same type and then compare.
 * '0' -> 0 -> false
 * return true
 */

console.log(false === '0')
/**
 * "===" won't conduct implicit type conversion. It will compare two operand with different type
 * if type is different, return false.
 */
