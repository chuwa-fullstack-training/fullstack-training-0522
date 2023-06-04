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
  let prev=0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === ' '){
      let reversedWord=str.substr(prev,i).reverse();
      prev=i;
    }
  }
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
