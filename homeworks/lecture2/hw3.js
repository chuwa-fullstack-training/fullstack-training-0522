// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);         
// 0.30000000000000004
// JavaScript uses binary floating-point arithmetic, due to the limitations of floating-point precision,
// the number 0.1 and 0.2 cannot be accurately represented in binary, and its binary approximation will be used instead.

console.log(0.1 + 0.2 == 0.3);
// false
// due to the limitations of floating-point precision, result of 0.1 + 0.2 is 0.30000000000000004

console.log(1 +  "2" + "2");
// string "122"
// "+" ==> string corcersion, String + Number = String

console.log(1 +  +"2" + "2");
// string "32"
// +"2" ==> number corcersion, Number + Number = Number
// 1 + 2 = 3, 3 + "2" = "32"

console.log(1 +  -"1" + "2");
// string "02"
// -"1" ==> number corcersion, Number + Number = Number
// 1 - 1 = 0, 0 + "2" = "02"

console.log(+"1" +  "1" + "2");
// string "112"
// "+" ==> string corcersion, String + Number = String
// "1" + "1" = "11", "11" + "2" = "112"

console.log("A" - "B" + "2");
// string "NaN2"
// "-" ==> number corcersion, "A" - "B" = NaN, NaN + "2" = "NaN2"

console.log("A" - "B" + 2);
// NaN
// "-" ==> number corcersion, "A" - "B" = NaN, 
// String + Number = String, NaN + 2 = NaN

console.log("0 || 1 = "+(0 || 1));
// String "0 || 1 = 1"
// The || operator is a logical OR operator. It returns the first truthy value it encounters or the last value if none are truthy.
// String + Number = String, "0 || 1 = " + 1 = "0 || 1 = 1"

console.log("1 || 2 = "+(1 || 2));
// String "1 || 2 = 1"
// String + Number = String, "1 || 2 = " + 1 = "1 || 2 = 1"

console.log("0 && 1 = "+(0 && 1));
// String "0 && 1 = 0"
// The && operator is a logical AND operator. It returns the first falsy value it encounters, or the last value if none are falsy.
// String + Number = String, "0 && 1 = " + 0 = "0 && 1 = 0"

console.log("1 && 2 = "+(1 && 2));
// String "1 && 2 = 2"
// String + Number = String, "1 && 2 = " + 2 = "1 && 2 = 2"

console.log(false == '0')
// true
// == operator will convert the operands to the same type before making the comparison

console.log(false === '0')
// false
// === operator will not do type conversion, so false === '0' is false
