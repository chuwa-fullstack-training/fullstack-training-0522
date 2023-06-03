// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    
    const regex = /^<([a-z]+)(\s+[^>]*?)?(\/?>|<\/\1>)$/i;

    return regex.test(html)
}

console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));
console.log(checkValidHTML("<div>"));