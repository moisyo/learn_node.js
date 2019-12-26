const addCsv = require('./addCsv.js');

test('20 add to 70 in csv file to 90  ',
()=>{
expect(addCsv(20)).toBe(90);
});