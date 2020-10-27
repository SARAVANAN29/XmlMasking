exports.xmlSanitize = function(xml, sanitizeArray, attributeArray, splRegex, optionObj) {
    var optionObject = optionObj ? optionObj : {}; //{ ignoreCase = true, replacement = "******", regexOpt = `` }
    var maskXmls = (elements, { ignoreCase = false, replacement = "******" } = optionObject) => {
        return value => {
            if (typeof value !== "string") {
                return value;
            }
            else {
                for (const element of elements) {
                    let regex = splRegex ? `|${element}=`+ splRegex : '';
                    //if you want different regex option , then use regexOpt in the optionObj
                    let regexOption = optionObj ? optionObj.regexOpt ? optionObj.regexOpt : `g${ignoreCase ? "i" : ""}` : `g${ignoreCase ? "i" : ""}`;

                    const search = new RegExp(`<(${element})[^</]*</(${element})>` + regex, regexOption);
                    if (attributeArray) {
                        if (attributeArray.includes(element)) {
                            // console.log(element + ' ' + search)
                            value = value.replace(search, `${element}="${replacement}"`);
                        }
                        else {
                            value = value.replace(search, `<$1>${replacement}</$2>`);
                        }
                    }
                    else {
                        value = value.replace(search, `<$1>${replacement}</$2>`);
                    }
                }
            }
            return value;
        };
    };
    var maskXml = maskXmls(sanitizeArray);
    // console.log(maskXml(xml));
    return maskXml(xml);
};

exports.xmlJsonSanitize = function(json, sanitizeArray, attributeArray, splRegex, optionObj) {
    var copyOfJson = JSON.parse(JSON.stringify(json));
    var optionObject = optionObj ? optionObj : {}; //{ ignoreCase = true, replacement = "******", regexOpt = `` }
    var maskXmls = (elements, { ignoreCase = false, replacement = "******" } = optionObject) => {
        return value => {
            if (typeof value !== "string") {
                return value;
            }
            else {
                for (const element of elements) {
                    let regex = splRegex ? splRegex : '';
                    //if you want different regex option , then use regexOpt in the optionObj
                    let regexOption = optionObj.regexOpt ? optionObj.regexOpt : `g${ignoreCase ? "i" : ""}`;

                    const search = new RegExp(`<(${element})>[^</]*</(${element})>` + regex, regexOption);
                    if (attributeArray.includes(element)) {
                        value = value.replace(search, `${element}="${replacement}"`);
                    }
                    else {
                        value = value.replace(search, `<$1>${replacement}</$2>`);
                    }
                }
            }
            return value;
        };
    };
    var maskXml = maskXmls(sanitizeArray);
    console.log(maskXml(json));
    return maskXml(json);
};
