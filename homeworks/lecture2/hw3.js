// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); 
// 0.30000000000000004
// it is because of floating-point precision

console.log(0.1 + 0.2 == 0.3);
// false
// still becasue of floating-point precision and 0.1 + 0.3 not necessarily equal to 0.3

console.log(1 +  "2" + "2");
// '122'
//  it becomes string concatenation when at least one operand is a string

console.log(1 +  +"2" + "2");
// '32'
// +"2" converts "2" to a number before adding it to 1
// and then result is concatenated with the string "2"

console.log(1 +  -"1" + "2");
// '02'
// - before the '1' convert "1" to -1, and the final answer concatenate to '2' -> "02"

console.log(+"1" +  "1" + "2");
// '112'
// +"1" part makes the string "1", and then concatenate to '1' and '2'

console.log( "A" - "B" + "2");
// 'NaN2'
// when non numeracal makes subtraction, it becomes NaN. and it concatenate with '2'

console.log( "A" - "B" + 2);
// 'NaN'
// because + 2 does not change NaN result

console.log("0 || 1 = "+(0 || 1));
// '0 || 1 = 1'
// it is a logical OR operation. because  0 is a false value, the result becomes true value 1

console.log("1 || 2 = "+(1 || 2));
//  '1 || 2 = 1'
// both 1 and 2 should be true value

console.log("0 && 1 = "+(0 && 1));
// '0 && 1 = 0'
// it is a logical AND operation becuase 0 is false, so final result will be false

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// both 1 and 2 are true, so the result is the last truthy value, which is 2

console.log(false == '0')
// 'true'
// loose equality

console.log(false === '0')
// 'false'
// strict equality
