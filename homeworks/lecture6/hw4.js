/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numArr = num.toString().split(".");
  let integerPart = numArr[0];
  let decimalPart = numArr[1];

  let res = "";
  while (integerPart.length > 3) {
    res = "," + integerPart.slice(-3) + res;
    integerPart = integerPart.slice(0, -3);
  }
  res = integerPart + res;

  if (decimalPart) {
    res += "." + decimalPart;
  }
  return res;
}

console.log(format(1234.56));
