/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  if(str.length == 1) return str.join('');

  var k = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      let tmp = k, j = i;
      while(j < str.length && str[j] !== ' ') str[tmp++] = str[j++];
      reverseArraySection(str, k, tmp - 1);
      str[tmp++] = ' ';
      k = tmp, i = j;
    }
  }

  if(k) k--;
  const n = str.length;
  for(let i = k; i < n; i++) str.pop();
  reverseArraySection(str, 0, str.length - 1);
  return str.join('');
}

function reverseArraySection(arr, start, end) {
  while(start < end) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++, end--;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));