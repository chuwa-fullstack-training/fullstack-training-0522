// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// there are precision limitations of floating-point numbers.
// so the result is not exactly 0.3

console.log(0.1 + 0.2 == 0.3);
// false
// same reason as the question above.

console.log(1 + "2" + "2");
// "122"
// when the '+' operator encounters a string, it performs concatenaation.
// number 1 is coerced into a string.

console.log(1 + +"2" + "2");
// "32"
// +"2" will attemp to convert the operand into a numeric value. 1 + 2 = 3
// then just like the case above, +"2" will coerce 3 into string. we get "32"

console.log(1 + -"1" + "2");
// "02"
// like the case above, -"1" we get -1. 1 + (-1) = 0. 0 + "2" = "02"

console.log(+"1" + "1" + "2");
// "112"
// +"1" we get integer 1; 1 + "1" we get string "11"; "11" + "2" we get "112"

console.log("A" - "B" + "2");
// NaN2
// subtraction not defined for strings, "A" - "B" will get a NaN.
// + "2" will perform a string concatenation between NaN and "2", so we get NaN2

console.log("A" - "B" + 2);
// NaN
// "A" - "B" gets NaN as we've discussed above.
// when NaN is involved in arithmetic operation, the result is always NaN.

console.log("0 || 1 = " + (0 || 1));
// "0 || 1 = 1"
// logic OR operation (0 || 1) get 1.
// Then it will concatenates with the string literal ahead of it.

console.log("1 || 2 = " + (1 || 2));
// "1 || 2 = 1"
// similar to the previous case, (1 || 2) get 1.
//  then a string concatenation operaiton is performed.

console.log("0 && 1 = " + (0 && 1));
// "0 && 1 = 0"
// logic AND (0 && 1) gets 0. Concatenation is the same.

console.log("1 && 2 = " + (1 && 2));
// "1 && 2 = 2"
// The logical AND operator returns the first falsy value encountered or the last value if all operands are truthy.
// 1 and 2 are both truthy values, so it returns 2. String concatenation is the same.

console.log(false == "0");
// true
// in loose equality operator, type coercison is performed: "0" -> 0, false -> 0.

console.log(false === "0");
// false
// the two values are of different type and are not strictly equal.
