// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// round-off errors shows due to tbe floating point number precision iwth the limited precision of 64 bits about 16 digits
console.log(0.1 + 0.2 == 0.3);
// false
// round-off errors
console.log(1 + '2' + '2');
// 122
// number plus string will convert to string adding
console.log(1 + +'2' + '2');
// 32
// + operand in front of a string converts it to number
console.log(1 + -'1' + '2');
// 02
// - operand in front of a string converts it to number
console.log(+'1' + '1' + '2');
// 112
// number plus string will convert to string adding

console.log('A' - 'B' + '2');
// NaN2
// letter string cannot be minus so return NaN, NaN + "2" will convert NaN to string and add string 2

console.log('A' - 'B' + 2);
// NaN
// NaN + 2 will be NaN
console.log('0 || 1 = ' + (0 || 1));
// 0 || 1 = 1
// For 0 || 1, the number 1 is treated as true, the number 0 as false, therefore,  0 || 1 = 1, then  1 is converted to "1"
console.log('1 || 2 = ' + (1 || 2));
// 1 || 2 = 1
// || when it hits 1, the OR condition is met, it need not go any further and short circuit the rest
console.log('0 && 1 = ' + (0 && 1));
// 0 && 1 = 0
// && hits 0 will return 0 whatever other values are
console.log('1 && 2 = ' + (1 && 2));
// 1 && 2 = 2
// Returns expr1 if it can be converted to false; otherwise, returns expr2.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
console.log(false == '0');
// true
console.log(false === '0');
// false
// === will not only judge value but also the data types of the operands
