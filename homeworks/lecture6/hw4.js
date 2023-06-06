/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  var count = 0;
  const numString = num.toString().split(".");
  var integer = numString[0].split("");
  var decimal = Number(numString[1]);
  for (let i = 0; i < integer.length; i++) {
    if (count % 3 === 0 && count !== 0) {
      integer.splice(integer[integer.length - 1 - i], 0, ",");
      i++;
    }
    count++;
  }
  return integer.concat(decimal ? "." + decimal : "").join("");
}

console.log(format(12345678));
console.log(format(123456789));
console.log(format(1234.56));
console.log(format(0));
console.log(format(0.2));
console.log(format(10));
console.log(format(100));
