/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(s) {
  // 1.remove extra spaces
  function removeExtraSpaces(s) {
    let slow = 0;
    let fast = 0;
    for (; fast < s.length; fast++) {
      if (s[fast] != ' ') {
        if (slow != 0) {
          s[slow++] = ' ';
        }
        while (fast < s.length && s[fast] != ' ') {
          s[slow] = s[fast];
          fast++;
          slow++;
        }
      }
    }
    s.length = slow;
  }

  // 2.reverse the words
  function reverseWordsInArr(s, start, end) {
    let slow = start;
    let fast = end;
    while (slow < fast) {
      [s[slow], s[fast]] = [s[fast], s[slow]];
      slow++;
      fast--;
    }
  }
  let arr = Array.from(s);
  removeExtraSpaces(arr); // remove the extra spaces in string array;
  reverseWordsInArr(arr, 0, arr.length - 1); // reverse the words in modified array

  // 3.reverse single word after second step:drlow - > world
  let begin = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      reverseWordsInArr(arr, begin, i - 1);
      begin = i + 1;
    }
  }
  return arr.join('');
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));
