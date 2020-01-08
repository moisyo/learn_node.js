var fs = require("fs");

fs.readdir("/learn_node.js/study",function(err, files){
    files.forEach( function (file){
        console.log(file)
    })
})