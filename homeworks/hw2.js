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
    let ans = [];
    let stack = [];
    for(let i of str){
   
      if(i===' '){
        ans.unshift(stack.join(""));
        stack=[];
      }else{
        stack.push(i);
      }
    }
    ans.unshift(stack.join(""));
    return ans;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input).join(" "));