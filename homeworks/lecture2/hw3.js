// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//Classic JS bug, the answer is 0.300000000004. With decimal fractions, this floating-point number system causes some rounding errors in JavaScript,
//Representing many decimals in binary requires an infinite number of digits.This is because binary numbers are represented by 2 power n(2ˆn) where n is an integer.
//While trying to calculate 0.1, long division will go on forever.

console.log(0.1 + 0.2 == 0.3);
//False. The reason is stated above.

console.log(1 + "2" + "2");
//122. Because their type will automatically convert to string type, and "+" will concatenate them.

console.log(1 + +"2" + "2");
//+ or - operand in front of a string converts it to number. so here +"2" will become 2 hence the result will be 3.
//And 3 + "2" is "32".

console.log(1 + -"1" + "2");
//The same reason as stated above. It's 02

console.log(+"1" + "1" + "2");
//The same reason as stated above. +"1" in the begining is number 1. It's 112

console.log("A" - "B" + "2");
//There is no number like B, so "A" - "B" is NaN, and +"2" will be NaN2.

console.log("A" - "B" + 2);
//NaN plus a number is still  NaN. So it's NaN

console.log("0 || 1 = " + (0 || 1));
// 0 or 1 equals to false or true. So the result is true, which is 1.
//So the answer is 0 || 1 = 1.

console.log("1 || 2 = " + (1 || 2));
// True || any number is still true. So the answer is 1 || 2 = 1

console.log("0 && 1 = " + (0 && 1));
//0 and 1 equals to false and true. So the result is false. So the answer is 0 && 1 = 0

console.log("1 && 2 = " + (1 && 2));
//&& (and operator) returns the last (right-side) value as long as the chain is "truthy".
//So the answer is 1 && 2 = 2

console.log(false == "0");
//== will not check the type, so 0 is equal to false, so answer is true.

console.log(false === "0");
//=== will check the type, so boolean is not euqals to string, so answer is false
