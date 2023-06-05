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
  reverse(str, 0, str.length - 1);
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    if (right === str.length - 1) {
      reverse(str, left, right);
    } else if (str[right] === ' ') {
      reverse(str, left, right - 1);
      left = right + 1;
    } 
  }
  return str.join('');
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));