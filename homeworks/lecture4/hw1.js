// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

// some assumptions for simplicity:
// I assume all tags must be paired (ie no empty tags)
// I assume all lt and gt symbols are escaped (ie no <div id=">"></div> even though it is valid only id="&gt;")
// also I return false for example three because online checkers give error even though it renders in browser fine

function checkValidHTML(html) {
    let stack = [];
    let i = 0;
    while (i = html.indexOf("<", i) + 1) {
        let c = html.charAt(i);
        let j = html.indexOf(">", i);
        if (j == -1) return false; // I guess can replace with j = html.length to handle example 3
        if (c === '!') {
            // ignore this ! tag
        } else if (c === '/') {
            let tag = html.substring(i + 1, j).split(" ")[0];
            if (tag !== stack.pop()) {
                return false;
            }
        } else {
            let tag = html.substring(i, j).split(" ")[0];
            stack.push(tag);
        }
        i = j + 1;
    }
    if (stack.length > 0) {
        return false; // all tags must be paired
    }
    return true;
}

// ** Playing around I notice online validator allows stuff like <title><notatag></title></head></html>...