// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
//A Number is a floating point number with a limited precision of 64 bits, about 16 digits. 
//This is a round-off errors

console.log(0.1 + 0.2 == 0.3);
//false
//since the round-off error: 0.1 + 0.2 == 0.3...4 != 0.3

console.log(1 +  "2" + "2");
//122
//+ is concatenating notation when there is a str

console.log(1 +  +"2" + "2");
//32
//the + before the first "2" converts it to number, so it's 3, then the + before the last "2" means string concat 

console.log(1 +  -"1" + "2");
//02
//the - before "1" converts it to number, so it's 3, then the + before "2" means string concat 

console.log(+"1" +  "1" + "2");
//112
//+ "1" -> number 1, then the rest are string concat

console.log( "A" - "B" + "2");
//NaN2
//- cannot be used on strings, thus "A" - "B" = NaN, + "2" is string concat

console.log( "A" - "B" + 2);
//NaN
//- cannot be used on strings, thus "A" - "B" = NaN, NaN + a number is still a type of NaN

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1
//false or true = true

console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1
//true or ** = true, once it is true; 0 || ** = **

console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
//false and true = false

console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
//true && ** = **, once it is true

console.log(false == '0')
//true
//'0' == 0, 0 is a falsy value, 0 = false

console.log(false === '0')
//false
//'0' is a string, false is a boolean, the types are not the same
