// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/* 
The answer would be 0.30000000000000004. With decimal fractions, this floating-point number system causes some rounding errors in JavaScript. For example, 0.1 and 0.2 cannot be represented precisely. 

Representing many decimals in binary requires an infinite number of digits.This is because binary numbers are represented by 2 power n(2ˆn) where n is an integer. While trying to calculate 0.1, long division will go on forever.
*/

console.log(0.1 + 0.2 == 0.3);
/* 
The answer would be false. Since like the previous answer, 0.1 and 0.2 are not represented precisely in JavaScript. Thus, the sum of them will not be 0.3. 

This expression can be changed to 
Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON 
which will give the correct answer of True. 

This function works by checking whether the difference between the two numbers are smaller than Number.EPSILON. Remember that Number.EPSILON is the smallest difference between two representable numbers. The difference between 0.1+0.2 and 0.3 will be smaller than Number.EPSILON. 
*/

console.log(1 +  "2" + "2");
/* The result will be 122 as string. Because the first element is a number and the next two elements are string so the three elements are concatenated to 122 */

console.log(1 +  +"2" + "2");
/* After put a positive sign in front of "2", it turns from a string to a number. As the first element is 1 as a number, the first two element will add up like a number and concatenated with the last element "2". The result will be 32. */

console.log(1 +  -"1" + "2");
/* The same drill as the previous one only that the second element becomes a negative number. The result will be 02 */

console.log(+"1" +  "1" + "2");
/* The first element is a number 1, concatenated with "12" as string. The result will be 112. */

console.log( "A" - "B" + "2");
/* Subtract two string gives NaN and concatenated with "2". The result will be NaN2*/

console.log( "A" - "B" + 2);
/* Subtract two string gives NaN. And as string can't be added with number, the result will be NaN. */

console.log("0 || 1 = "+(0 || 1));
/* 
Returns expr1 if it can be converted to true; otherwise, returns expr2. 

The following values are equivalent to false in conditional statements:
-false
-null
-undefined
-The empty string "" (\ '')
-The number 0
-The number NaN 

Thus, 0 || 1 gives 1. And 1 is concatenated with "0 || 1 = " which results in 0 || 1 = 1 */

console.log("1 || 2 = "+(1 || 2));
/* Since both 1 and 2 are true, 1 is output. The result will be 1 || 2 = 1 */

console.log("0 && 1 = "+(0 && 1));
/* 
Returns expr1 if it can be converted to false; otherwise, returns expr2.
Since 0 is false, 0 is returned. The result is 0 && 1 = 0 */

console.log("1 && 2 = "+(1 && 2));
/* Since both 1 and 2 are true, 2 is returned. The result is 1 && 2 = 2 */

console.log(false == '0')
/* 
Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.

So, when you compare string with a number, JavaScript converts any string to a number. An empty string is always converts to zero. A string with no numeric value is converts to NaN (Not a Number), which returns false. 

Since 0 is false, they are equal. */

console.log(false === '0')
/* 
=== (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. 

Since false and '0' are not the same type, it will return false for not equal. */