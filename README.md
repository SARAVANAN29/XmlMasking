# xmlmasking
a package for xml masking.      It has 2 methods, xmlSanitize, xmlJsonSanitize
1. xmlSanitize – For xml alone.
2. xmlJsonSanitize – For xml inside json.


# Installation

```bash
$ npm install xmlmasking
```

# Usage

```javascript

    const {xmlSanitize, xmlJsonSanitize} = require("xmlmasking");
    var json = {a:`<sara attr=true>1234</sara>`};
    var xml = `<sara attr=true>1234</sara>`;
    console.log(xmlJsonSanitize(json, [‘key’], ['attr'])); // {"a":"<sara attr="******">1234</sara>"}
    console.log(xmlJsonSanitize(json, [‘sara’])); // {"a":"<sara>******</sara>"}
    console.log(xmlSanitize(xml, [‘sara’])); // <sara>******</sara>
```

# Notes

Syntax :
1. exports.xmlSanitize = function(xml, sanitizeArray, attributeArray, splRegex, optionObj) {}
2. exports.xmlJsonSanitize = function(json, sanitizeArray, attributeArray, splRegex, optionObj) {}

splRegex -> If any special kind of regex need to add means, we can mention that string

optionObj -> { ignoreCase = true, replacement = "******", regexOpt = `` }

regexOpt -> like single match, other addtional properties for regex.

First 2 arguments are mandatory.
