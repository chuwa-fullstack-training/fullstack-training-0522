/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 * 
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 */

const fs = require('fs');
const path = require('path');

// Get command-line arguments
const dir = process.argv[2];
const ext = '.' + process.argv[3];
console.log(dir)
console.log(ext)

// Read directory
fs.readdir(dir, function(err, files) {
  if (err) {
    return console.error(err);
  }
  console.log('files: ' + files)

  files.forEach(function(file) {
    // if the extension matches
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});

// terminal code is: node hw1.js . js;
// . means the current code, js means extension needs to be js