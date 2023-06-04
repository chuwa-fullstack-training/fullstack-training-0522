// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const regex = /<\/?[^>]+(>)/g;
    let tags = html.match(regex);
    // console.log(tags);
    if (tags.length % 2 !== 0) {
        return false;
    }
    while (tags.length !== 0) {
        let start = tags.shift();
        let end =  tags.pop();
        if (end[1] === '/' && start === end.replace('/', '')) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

html = '<html><head><title>My Title</title></head></html>';
console.log(checkValidHTML(html));