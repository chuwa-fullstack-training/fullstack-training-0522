// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 == 0.3); // float point

console.log(1 +  "2" + "2");

console.log(1 +  +"2" + "2"); // this + will make second 2 a number

console.log(1 +  -"1" + "2");

console.log(+"1" +  "1" + "2");

console.log( "A" - "B" + "2"); // "A" - "B" will return NaN, so NaN2

console.log( "A" - "B" + 2);

console.log("0 || 1 = "+(0 || 1));

//如果两个都是true, 就返回前面的值
console.log("1 || 2 = "+(1 || 2));

console.log("0 && 1 = "+(0 && 1));
// 如果前一个是true， 就返回后面的值
console.log("1 && 2 = "+(1 && 2));

console.log(false == '0') // only check implicit mean

console.log(false === '0') // also check type 
