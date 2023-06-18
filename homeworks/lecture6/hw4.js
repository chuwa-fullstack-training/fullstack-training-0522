/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numString = num.toString();
  let result = '';
  let n = numString.length;
  for (let i = n - 1, count = 0; i >= 0; i--, count++) {
    result = numString[i] + result;
    if (count % 3 === 2) {
      if  (&& i !== 0){
        result = ',' + result;
      }
      
    }
  }
  
  return result;
}
