
var path = require('path')
const fs = require('fs');
var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
function unixtime (time) {
    return { unixtime: time.getTime() }
}



module.exports = {
  getFiles: (req, res) => {
    const folder = req.params.folder;
    const extension = req.params.extension;
    let object1 = []

    // fs.promises.readdir(folder, (err, files) => {
    //     console.log("d")
    //     if (err)
    //       console.log(err);
    //     else {
    //       files.forEach(file => {
            
            
    //         if(path.extname(file) === '.' + extension)
                
    //             object1.push(file);
    //       })
    //     }
    //   }).then(()=>res.json(object1));
    var arr = [];

    var files = fs.readdirSync(folder);

    files.forEach(file => {
        let fileStat = fs.statSync(folder + '/' + file).isDirectory();
        if(!fileStat && path.extname(file) === '.' + extension) {
        arr.push(file);
    }

    
    });
    res.json(arr);
  },



  getTime: (req, res) => {
        const type = req.params.time;
        const times = req.query.iso;
        let time = new Date(times);
        let result;
        if (type=='parsetime') {
          result = parsetime(time)
        } else if (type=='unixtime') {
          result = unixtime(time)
        }
        res.json(result);
  },

};