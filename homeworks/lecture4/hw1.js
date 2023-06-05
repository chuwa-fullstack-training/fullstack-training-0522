// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stk = [];

    for(let i = 0; i < html.length; i++) {
        if(html[i] === '<') {
            let endTagPos = html.indexOf('>', i + 1);
            if(endTagPos === -1) return false;

            let tag = html.slice(i + 1, endTagPos);

            if(tag[0] === '/') {
                if(!stk.length) return false;
                let openTag = stk.pop();
                if(openTag !== tag.slice(1)) return false;
            } 
            else stk.push(tag);
            i = endTagPos;
        }
    }
    return !stk.length;
}