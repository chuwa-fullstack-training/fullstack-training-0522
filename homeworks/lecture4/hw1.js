// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = []
    let i = 0
    while (i < html.length) {
        if (html[i] == '<') {
            if (html[i + 1] == '/') {
                if (html[i + 2] == stack[stack.length - 1]) {
                    stack.pop()
                    i += 3
                } else {
                    return false
                }
            } else {
                stack.push(html[i + 1])
                i += 2
            }
        } else {
            i++
        }
    }
    return stack.length == 0
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'))

