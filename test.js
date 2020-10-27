var {xmlSanitize} = require("./index.js");
let xml = `<name a="ts">saravajnhan</name><age></age>`;
var out = xmlSanitize(xml, ['name', 'age'], ['a'], '"ts"', {});
var out = xmlSanitize(xml, ['name', 'age']);
console.log(out);