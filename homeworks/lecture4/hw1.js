// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/xml");
  if (doc.documentElement.querySelector("parsererror")) {
    return doc.documentElement.querySelector("parsererror").innerText;
  } else {
    return true;
  }
}
