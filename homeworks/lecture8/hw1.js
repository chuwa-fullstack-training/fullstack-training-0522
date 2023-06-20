/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
const express = require("express");
const path = require("path");
const app = express();
const router1 = express.Router();
const router2 = express.Router();
const fs = require("fs");


router1.get('/hw1/:dir/:ext', (req, res) => {//:getvalue to this var name
    //when use: req.params.name
    let result = [];
    fs.readdir(req.params.dir, "utf8", (error, files) => {
        if (!files || !files.length){
            console.log("no such files in this directory");
        }
        if(error){
            console.log(error);
        }
        else{
            for(let i = 0; i < files.length; i++){
                let filename = files[i];
                if(path.extname(filename) == req.params.ext){
                    result.push(filename);
                }
                
            }
        }

        console.log(result);
        // if(!result || !result.length){
        //     res.send("no such files directory");
        // }
        res.send(result);
    })
    
});
app.use('/', router1);

router2.get('/hw2/api/:method', (req, res) => {
    let result;
    let query = req.query
    console.log(query);//{ iso: '2023-05-22T12:34:56.789Z' }
    if(req.params.method === 'parsetime'){
        let time = query.iso.substring(11, 19).split(':', 3);
        //console.log(time);//[ '12', '34', '56' ]
        result = {
            hour: parseInt(time[0]),
            minute: parseInt(time[1]),
            second: parseInt(time[2])
          };
    }//http://localhost:3000/hw2/api/parsetime?iso=2023-05-22T12:34:56.789Z
    else if (req.params.method === 'unixtime'){
        let date = new Date (query.iso);
        result = {
            unixtime: date.getTime()
        }
    }//http://localhost:3000/hw2/api/unixtime?iso=2023-05-22T12:34:56.789Z
    
    res.send(result);
});
app.use('/', router2);  

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
