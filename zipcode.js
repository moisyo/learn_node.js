const https = require('https');
var request = require('request');
// var zipcode = process.argv[2];

		  var elm;
		  var ans;
		  var ans2;
		  var ans3;
		  var ans4;

function searchZip(zipcode) {
	var options = {
		url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='+zipcode,
		method: 'GET',
		json: true
	}
		return new Promise(resolve=>
			request(options, function(error, response, body){

				elm = body.results[0];
				ans = elm.address1;
				ans2 = elm.address2;
				ans3 = elm.address3;
				ans4 = ans + ans2 + ans3;
				
		    resolve(ans4);
		  console.log(ans4 + "1");
			})
			)
			
	}
	module.exports = searchZip;



