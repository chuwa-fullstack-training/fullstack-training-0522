// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.

/* Use a pointer to iterate the html string, finds a '<', then search for its '>';
Use a stack to keep track of the tags.*/
function checkValidHTML(htmlString) {
  const stack = [];
  let index = 0;

  while (index < htmlString.length) {
    if (htmlString[index] === "<") {
      const endIndex = htmlString.indexOf(">", index);
      if (endIndex === -1) {
        return false; // Invalid HTML
      }

      const tag = htmlString.slice(index + 1, endIndex);
      console.log(tag);
      if (tag.charAt(0) === "/") {
        if (stack.length === 0 || stack.pop() !== tag.substring(1)) {
          return false; // Closing tag doesn't match last opening tag
        }
      } else {
        stack.push(tag);
      }

      index = endIndex + 1;
    } else {
      index++;
    }
  }

  return stack.length === 0;
}

const tags1 = "<html><head><title>My Title</title></head></html>";
const tags2 = "<html><head><title>My Title</title></head></head></html>";
const tags3 = "<html><head><title>My Title</title></head></html>";

console.log(checkValidHTML(tags1)); // returns true
console.log(checkValidHTML(tags2)); // returns false
console.log(checkValidHTML(tags3)); // returns true
