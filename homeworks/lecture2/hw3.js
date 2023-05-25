// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
0.3000000000000
// float + float in JavaScript use binary floating-point representation, 
// may cause small rounding errors in certain calculations. 

console.log(0.1 + 0.2 == 0.3);
false
// 0.30000000000 != 0.3

console.log(1 +  "2" + "2");
122
// number + string will convert number to string as well

console.log(1 +  +"2" + "2");
32
// +"2" is unary plus operator, will convert this "2" string to number

console.log(1 +  -"1" + "2");
02
// same as the above

console.log(+"1" +  "1" + "2");
112
// although +"1" is a Number, when it plus with String, will convert to string again

console.log( "A" - "B" + "2");
NaN2
// there is no minus operation in String, so it will be convert to Number, and both "A" and "B" not a Number, so NaN + String"2"

console.log( "A" - "B" + 2);
NaN
// NaN + Number 2 = NaN

console.log("0 || 1 = "+(0 || 1));
0 || 1 = 1
// operator left is false, so return right, 0 || 1 return 1

console.log("1 || 2 = "+(1 || 2));
1 || 2 = 1
// operator left is true, so return left

console.log("0 && 1 = "+(0 && 1));
0 && 1 = 0
// operator left is false, so return left

console.log("1 && 2 = "+(1 && 2));
1 && 2 = 2
// operator left is true, so return right

console.log(false == '0')
true
// == will do type convert, first convert '0' to number, then convert boolean false to number, and number 0 = 0

console.log(false === '0')
false
// === will not do type convert, so boolean can't = sting
