`use strict`
// function searchZip() {
const https = require('https');
var request = require('request');

var zipcode = process.argv[2];
var options = {
    url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='+zipcode,
    method: 'GET',
    json: true
}

request(options, function(error, response, body){
	var json = body;
console.log(json.results[0].address1);
})
// }

