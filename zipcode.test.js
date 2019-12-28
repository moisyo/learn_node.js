const searchZip = require('./zipcode.js');

test('hand over  zipcode 5310041 and retun the string "大阪府大阪市北区天神橋" ',
()=>{
    expect.assertions(1);
  return searchZip(5310041).then(data => {
    expect(data).toBe("大阪府大阪市北区天神橋");
  });
// expect(searchZip(5310041)).toBe("大阪府大阪市北区天神橋");
});