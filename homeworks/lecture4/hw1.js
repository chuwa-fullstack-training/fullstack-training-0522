// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    const openTagRegex = /<(\w+)>/g;
    const closeTageRegex = /<\/(\w+)>/g;

    
    let tag = "";

    while(tag = openTagRegex.exec(html)) {
        stack.push(tag[1]);
    }
    while(tag = closeTageRegex.exec(html)) {
        if(tag[1]!=stack.pop()){
            return false;
        }
    }
    return stack.length===0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'))