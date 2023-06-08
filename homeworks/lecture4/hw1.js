// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    arr = html.split('><');
    if (arr.length%2 === 0){
        return false;
    }
    const regex = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;
    return regex.test(html);
}

function checkValidHTML2(html) {
    const tagPattern = /<(\w+)>/g;
    const openingTags = [];
    let match;
  
    while ((match = tagPattern.exec(html)) !== null) {
      const tag = match[1];
      openingTags.push(tag);
    }
  
    const closingTags = html.match(/<\/(\w+)>/g) || [];
  
    if (openingTags.length !== closingTags.length) {
      return false;
    }
  
    for (let i = 0; i < openingTags.length; i++) {
      const openingTag = openingTags[i];
      const closingTag = closingTags[i].replace('/', '');
  
      if (openingTag !== closingTag) {
        return false;
      }
    }
  
    return true;
  }

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'))


