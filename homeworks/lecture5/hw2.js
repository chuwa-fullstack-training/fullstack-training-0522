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
  const arr = str.split('');
  arr.reverse();

  let start = 0;
  let end = 0;

  while (end < arr.length) {
    if (arr[end] === ' ') {
      reverseCharacters(arr, start, end - 1);
      start = end + 1;
    }
    end++;
  }

  reverseCharacters(arr, start, end - 1);

  const reversedStr = arr.join('');
  return reversedStr;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);