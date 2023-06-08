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
  function reverse(begin, end) {
    while (begin < end) {
      let c = str[begin];
      str[begin] = str[end];
      str[end] = c;
      ++begin;
      --end;
    }
  }
  reverse(0, str.length - 1);
  let i = 0;
  while (i < str.length) {
    let j = str.indexOf(' ', i);
    if (j == -1) j = str.length;
    reverse(i, j - 1);
    i = j + 1;
  }
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
//reverseWords(input);
console.log(reverseWords(input));
console.log(reverseWords(input));