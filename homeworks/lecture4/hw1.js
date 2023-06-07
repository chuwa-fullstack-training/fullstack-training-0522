// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stk = [];
    const openTagRegex = /<(\w+)>/g;
    const closeTageRegex = /<\/(\w+)>/g;

    let match = null;
    while(match = openTagRegex.exec(html)) stk.push(match[1]);
    while(match = closeTageRegex.exec(html)) {
        let openTag = stk.pop();
        if(openTag != match[1]) return false;
    }
    return !stk.length;
}