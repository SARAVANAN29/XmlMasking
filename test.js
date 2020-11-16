var {xmlSanitize,xmlJsonSanitize} = require("./index.js");
// let xml = `<name a="ts" b='12345'>saravajnhan</name><age>123</age>`;
// var out = xmlSanitize(xml, ['name', 'age'], ['a', 'b']);
//var out = xmlSanitize(xml, ['name', 'age']);
// console.log(out);

//var {xmlJsonSanitize} = require("./index.js");
let xml = {a:{b:`<name a="ts" b='12345'>saravajnhan</name><age>123</age>`}}
var out = xmlJsonSanitize(xml, ['nam', 'age'], ['a', 'b']);
//var out = xmlSanitize(xml, ['name', 'age']);
console.log(out);
console.log(xml)