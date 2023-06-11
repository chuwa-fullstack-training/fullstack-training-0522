/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const parts = String(num).split('.'); 
  const integerPart = parts[0];
  const decimalPart = parts[1] ? `.${parts[1]}` : '';
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return formattedInteger + decimalPart; // Combine the formatted integer and decimal parts
  
}

console.log(format(12345678));
console.log(format(1234.5678));
