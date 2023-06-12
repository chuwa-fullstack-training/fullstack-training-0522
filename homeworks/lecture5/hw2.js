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
  let res = '';
  let word = '';
  for (let i = 0; i < str.length; i++){
    let char = str[i];
    if (char === ' '){
      res = word + ' ' + res;
      word = '';
    }
    else{
      word += char;
    }
  }
  res = word + ' ' + res;
  return res;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));