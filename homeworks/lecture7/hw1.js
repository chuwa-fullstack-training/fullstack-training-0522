/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 * 
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program - C:\Program Files\nodejs\node.exe
 *  - process.argv[1] is the path to the script file - fullstack-training-0522\homeworks\lecture7\hw1.js
 *  - process.argv[2] is the first command-line argument - undefined -> target dirpath
 */

// your code here

const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

console.log(process.argv[2]);
let result = [];
let dirpath = process.argv[2];
let ext = ".txt";

fs.readdir(dirpath, "utf8", (error, files) => {
    if (!files || !files.length){
        console.log("no such files");
    }
    if(error){
        console.log(error);
    }
    else{
        for(let i = 0; i < files.length; i++){
            let filename = files[i];
            if(path.extname(filename) == ext){
                result.push(filename);
            }
            
        }
    }
    console.log(result);
})


