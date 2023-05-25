// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
console.log(0.1 + 0.2 == 0.3);
//true
//Explanations: floating point numbers cannot be precisely represented in Base 2 floating point number
console.log(1 +  "2" + "2");
//122
console.log(1 +  +"2" + "2");
//32
console.log(1 +  -"1" + "2");
//02
console.log(+"1" +  "1" + "2");
//112
console.log( "A" - "B" + "2");
//NaN2
console.log( "A" - "B" + 2);
//NaN
console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1
console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1
console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
console.log(false == '0')
//true
console.log(false === '0')
//false