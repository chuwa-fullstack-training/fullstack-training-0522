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

  let i = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j] == ' ') {
      reverseString(str, i, j - 1);
      i = j + 1;
    }
  }

  // Reverse the last word (if any)
  reverseString(str, i, str.length - 1);

  return str.join('');
}



function reverseString(str, i, j) {
  while (i < j) {
    const temp = str[i];
    str[i++] = str[j];
    str[j--] = temp;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);