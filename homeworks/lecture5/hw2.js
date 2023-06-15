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
  const reverse = (str, start, end) => {
    while (start < end) {
      const temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  };
  reverse(str, 0, str.length - 1);
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      reverse(str, start, i - 1);
      start = i + 1;
    }
  }
  reverse(str, start, str.length - 1);
  return str.join('');
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input))