/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
// input is an array of characters. so is the output.
/* step 1: reverse the whole list;
 * step 2: find the word boundaries by " " and then reverse the characters.
 */
function reverseWords(str) {
  // reverse the whole string
  reverse(str, 0, str.length - 1);

  // reverse each word
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (str[end] === " ") {
      reverse(str, start, end - 1);
      start = end + 1;
    }
  }

  // reverse the last word
  reverse(str, start, str.length - 1);
  return str;
}

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input);
