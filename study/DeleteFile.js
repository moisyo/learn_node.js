var fs = require("fs");

fs.unlink('input.txt', function(err){
    console.log("Success")
})