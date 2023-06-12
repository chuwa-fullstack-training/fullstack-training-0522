// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here

    // use stack to store opening tags
    const stack = [];
    // use regex to find all tags
    const tags = html.match(/<[^>]+>?/g);
    

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        // get tag name from tag using regex
        const tagName = tag.match(/<([^>]+)>?/)[1];


        if (tagName[0] === '/') {
            // closing tag

            // if there is no opening tag, return false as there shouldn't be closing tag
            if (stack.length === 0) return false;
            // if the closing tag doesn't match the last opening tag, return false
            const lastTag = stack.pop();
            if (lastTag !== tagName.slice(1)) return false;
        } else {
            // add opening tag to stack
            stack.push(tagName);
        }
    }
    
    // if there is still opening tag left in stack, return false
    if (stack.length > 0) return false;

    return true;
}

// test
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'));
console.log(checkValidHTML('<html><head><title><love>My Title</title></head></html>'));