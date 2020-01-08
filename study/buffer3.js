var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = new Buffer('Simply Easy Learning');
//concatenate(連結する)
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content:" + buffer3.toString());