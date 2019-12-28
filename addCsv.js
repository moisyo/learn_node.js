//モジュールを読み込み変数に代入
const fs = require('fs');
const csv = require('csv');
const parse = require('csv-parse/lib/sync');

function addCsv(x){
    console.log(x)
    var ans;
    fs.createReadStream(__dirname + '/jest.csv')
  .pipe(csv.parse(function(err, data) {

        console.log(data);
        var num = parseInt(data[1]);
        ans = sum(num, x);
        console.log(ans)
  }));
  console.log(ans)
  return ans;
}
module.exports = addCsv;

console.log(addCsv(20));


function sum(csvNum, addNum){
    return csvNum + addNum;
}

function readCsvSync(filename) {

    const content = fs.readFileSync(filename).toString();

    return parse(content);
  }

//   const records = readCsvSync('jest.csv');
//   var num = parseInt(records[1]);
//   var ans = sum(num, x);
//   return ans;