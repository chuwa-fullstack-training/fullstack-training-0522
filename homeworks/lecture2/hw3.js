// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// a float close to 0.3, but because of certain decimal numbers cannot be represented with perfect accuracy
// result would not be 0.3

console.log(0.1 + 0.2 == 0.3);
// false because of certain decimal numbers cannot be represented with perfect accuracy

console.log(1 +  "2" + "2");
// "122", result would be cast to string while do a int + string

console.log(1 +  +"2" + "2");
// "32", +"2" cast this element to a numaric 2 and 1+2 is 3, then the next "+" cast result to a string "32"

console.log(1 +  -"1" + "2");
// "02", like above, with the +"2" cast, the first part is numeric 0, and the next "+" cast it to a "02" string

console.log(+"1" +  "1" + "2");
// "112", first part will be a numeric 1 + a string "1", and final result would be string 112

console.log( "A" - "B" + "2");
// "NaN2", substraction caoused a NaN at frist part and cast a string with the 2

console.log( "A" - "B" + 2);
// "NaN", substraction caoused a NaN and a numeric addition would not change the result

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1", (0 || 1) will get 1 and then cast to the first part string

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1", same as above, get 1 then cast the the previous string

console.log("0 && 1 = "+(0 && 1));
//  "0 && 1 = 0", (0 && 1) will get 0, then cast

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2", (1 && 2) will get 2 because & will return the last true value, then cast

console.log(false == '0')
// true, 0 == false in loose equality opperator

console.log(false === '0')
// false, string cannot be cast to loose equality.
