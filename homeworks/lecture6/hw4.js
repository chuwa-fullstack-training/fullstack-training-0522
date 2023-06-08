/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  if (typeof num != 'number') {
    return NaN.toString();
  }
  if (!isFinite(num)) {
    return num.toString();
  }
  let raw = num.toString();
  let sign = "";
  let begin = 0;
  if (raw.charAt(0) == '-') {
    sign = "-";
    begin = 1;
  }
  let end = raw.indexOf('.');
  if (end == -1) end = raw.length;
  let frac = raw.slice(end);
  let int = raw.slice(begin, end);
  for (let i = int.length - 3; i > 0; i -= 3) {
    int = int.slice(0, i) + ',' + int.slice(i);
  }
  return sign + int + frac;
}
