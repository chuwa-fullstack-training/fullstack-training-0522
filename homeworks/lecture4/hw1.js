// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let openTag = /<(\w*)>/g;
    // let closeTag = new RegExp(`</${openTag[1]}>`);
    let closeTag = /<\/(\w*)>*/g;

    let openTags = html.match(openTag);
    // console.log(openTags);
    let closeTags = html.match(closeTag);
    // console.log(closeTags);

    if (openTags.length != closeTags.length){
        return false;
    }
    //else
    let tag = html.match(/<\/*(\w*)>*/g);
    // console.log(tag);
    
    while(tag.length){
        let open = tag.shift();
        let close = tag.pop();
        // console.log(open, close);
        let openTagName = open.match(/(\w+)/g);
        let closeTagName = close.match(/(\w+)/g);
        // console.log(openTagName, closeTagName);
        if(openTagName?.toString() != closeTagName?.toString())
            return false;
    }
    return true;
}

console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));//true
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));//false
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));//true
console.log(checkValidHTML("<></"));//true