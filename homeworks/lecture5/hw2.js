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
  let result = '';
  let word = '';
  let space = 0;
  for (let i = 0; i < str.length; i++){
    
    if (str[i] === ' '){
      space === 0? result = word + result : result = word + ' ' + result;
      space++;
      word = '';
    }
    else{
      word += str[i];
    }
  }
  result = word + ' ' + result;
  
  return result;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));