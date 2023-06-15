/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const str = num.toString();
  const arr = str.split('.');
  const integer = arr[0];
  const decimal = arr[1];
  const result = [];
  let count = 0;
  for (let i = integer.length - 1; i >= 0; i--) {
    result.push(integer[i]);
    count++;
    if (count % 3 === 0 && i !== 0) {
      result.push(',');
    }
  }
  result.reverse();
  if (decimal) {
    result.push('.');
    result.push(decimal);
  }
  return result.join('');
}

console.log(format(12345678));
console.log(format(1234.56));
console.log(format(123456789.123456789));
