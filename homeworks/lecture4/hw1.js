// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
  // implement your solution here
  var tag = "";
  let i = 0;
  var tagStack = [];
  while (i < html.length) {
    if (html[i] === "<") {
      while (i < html.length && html[i] !== ">") {
        tag += html[i];
        i++;
      }
      if (tag[1] === "/") {
        if (tagStack[tagStack.length - 1] === tag.slice(2, tag.length)) {
          tagStack.pop();
        } else return false;
      } else {
        tagStack.push(tag.slice(1, tag.length));
      }
      tag = "";
    }
    i++;
  }
  return !(tagStack.length > 0);
}

const html1 = "<html><head><title>My Title</title></head></html>";
const html2 = "<html><head><title>My Title</title></head></head></html>";
const html3 = "<html><head><title>My Title</title></head></html>";
console.log(checkValidHTML(html1));
console.log(checkValidHTML(html2));
console.log(checkValidHTML(html3));
