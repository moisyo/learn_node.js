var fs = require("fs");
var buf = new Buffer(1024);

fs.open('input.txt', 'r+', function(err, fd){

fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if(bytes > 0){
        console.log(buf.slice(0,bytes).toString());
    }

    fs.close(fd, function(err){
        console.log("File closed successfully!");
    })
})
})