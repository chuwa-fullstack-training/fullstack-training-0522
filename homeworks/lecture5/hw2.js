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
  // Reverse the entire string
  reverseString(str, 0, str.length - 1);

  let start = 0; // Start index of a word
  let end = 0; // End index of a word

  // Reverse individual words
  while (end < str.length) {
    if (str[end] === ' ') {
      reverseString(str, start, end - 1);
      start = end + 1;
    }
    end++;
  }

  // Reverse the last word (if any)
  reverseString(str, start, end - 1);

  // Join the reversed characters to form the resulting string
  return str.join('');
}

function reverseString(str, left, right) {
  while (left < right) {
    const temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
// test
console.log(reverseWords(input)); // 'blue is sky the'
