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

// your code here
const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err, files) => {
  if (err) {
    throw new Error(err);
  }
  const filteredFiles = files.filter((file) => path.extname(file) === `${ext}`);
  filteredFiles.forEach((file) => {
    console.log(file);
  });
});
