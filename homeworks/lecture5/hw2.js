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
  let splitStr = str.split(" ");
  let rev = splitStr.reverse();
  let result = rev.join(" ");
  return result;
  // console.log(result);
}

const input = "the sky is blue"; // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
