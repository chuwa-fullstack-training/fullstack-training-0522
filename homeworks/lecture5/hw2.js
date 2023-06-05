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
  str.reverse();
  let prev = 0;
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i + 1] === " ") {
      for (let j = 0; j < Math.floor((i - prev + 1) / 2); j++)
        [str[j + prev], str[i - j]] = [str[i - j], str[j + prev]];
      prev = i + 2;
    }
  }
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(""));
