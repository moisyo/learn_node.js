//モジュールを読み込み変数に代入
const fs = require('fs');
const parse = require('csv-parse/lib/sync');

function addCsv(x){
    const records = readCsvSync('jest.csv');
    var num = parseInt(records[1]);
    var ans = sum(num, x);
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

