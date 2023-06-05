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
  // your code here (not in-place)
  var n = str.length;
  if (n === 0){
    return [];
  }
  let word = [];
  let res = [];
  for (let i = 0; i < n; i += 1){
    if (str[i] !== ' '){
      word.push(str[i])
    }else{
      res = [' '].concat(word.concat(res));
      word = [];
    }
  }
  res = word.concat(res);
  console.log(res);
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);

// ['b', 'l', 'u', 'e',' ', 'i', 's', ' ',
//   's', 'k', 'y', ' ','t', 'h', 'e']