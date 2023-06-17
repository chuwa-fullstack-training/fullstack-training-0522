// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function getTheTag(html, startIndex) {
    let i = startIndex;
    while (html[i] !== '>') {
        i++;
    }
    return html.substring(startIndex, i);
}

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    for (let i = 0; i < html.length; i++) {
        if (html[i] === '<') {
            if (html[i + 1] !== '/') {
                const openingTag = getTheTag(html, i + 1);
                stack.push(openingTag);
              
            } 
            else {
                const closingTag = getTheTag(html, i + 1);
                const openingTag = stack.pop();

                if (closingTag !== openingTag) {
                    return false;
                }
            }
        }
    }

    return stack.length === 0;
}