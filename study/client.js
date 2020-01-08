var http = require('http');

var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm'
};

var callback = function(response){
    var body = '';
    response.on('data', function(){
        console.log('body');
    })
}

var req = http.request(options, callback);
req.end();