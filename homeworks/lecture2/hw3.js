// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/*
 * ans: 0.30000000000000004
 * explaination: binary format cannot represent floating point numbers precisely
 * so the bias produced 0.1 + 0.2 not equal to 0.3.
 */

console.log(0.1 + 0.2 == 0.3);
/*
 * ans: false
 * explaination: since 0.1 + 0.2 == 0.30000000000000004, so ans is false.
 */

console.log(1 + "2" + "2");
/*
 * ans: 122
 * explaination: number concats the string will be a string, so ans is 122.
 */

console.log(1 + +"2" + "2");
/*
 * ans: 32
 * explaination: unary plus operator convert operand to number, so 1 + 2 = 3;
 * then number concats the string will be a string, so ans is 32.
 */

console.log(1 + -"1" + "2");
/*
 * ans: 02
 * explaination: unary negation operator convert operand to number, so 1 + -1 = 0;
 * then number concats the string will be a string, so ans is 02.
 */

console.log(+"1" + "1" + "2");
/*
 * ans: 112
 * explaination: unary plus operator convert operand to number, so first operand becomes Number 1;
 * then number concats the string will be a string, so ans is 112.
 */

console.log("A" - "B" + "2");
/*
 * ans: NaN2
 * explaination: - is used to arithmetic substraction, but A and B convert to Number will become NaN;
 * then concat a string "2", so ans is NaN2.
 */

console.log("A" - "B" + 2);
/*
 * ans: NaN
 * explaination: - is used to arithmetic substraction, but A and B convert to Number will become NaN;
 * NaN + Number 2 will be NaN, so ans is NaN.
 */

console.log("0 || 1 = " + (0 || 1));
/*
 * ans: 0 || 1 = 1
 * explaination: if first operand is false, return second operand, which is 1.
 */

console.log("1 || 2 = " + (1 || 2));
/*
 * ans: 1 || 2 = 1
 * explaination: if first operand is true, return first operand, which is 1.
 */

console.log("0 && 1 = " + (0 && 1));
/*
 * ans: 0 && 1 = 0
 * explaination: if first operand is false, return first operand, whih is 0.
 */

console.log("1 && 2 = " + (1 && 2));
/*
 * ans: 1 && 2 = 2
 * explaination: if first operand is true, return second operand, whih is 2.
 */

console.log(false == "0");
/*
 * ans:true
 * explaination: "0" is a false value.
 */

console.log(false === "0");
/*
 * ans: false
 * explaination: "0" is a String but false is a Boolean, so === checks their types are not equal.
 */
