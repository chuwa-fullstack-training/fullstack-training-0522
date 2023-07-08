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
    let wordArray = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            temp = temp.concat(str[i]);

            if (i === str.length - 1) {
                wordArray.unshift(temp);
                temp = "";
            }
        } else {
            wordArray.unshift(temp);
            temp = "";
        }
    }

    let newStr = wordArray.reduce((acc, cur) => {
        return acc.concat(" ", cur);
    }, "");

    return newStr.trim();
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(reverseWords(input));
