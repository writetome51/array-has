"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayHas_1 = require("./arrayHas");
// values cannot contain object.
function arrayHasAll(values, array) {
    var i = -1;
    while (++i < values.length) {
        if (!(arrayHas_1.arrayHas(values[i], array)))
            return false;
    }
    return true;
}
exports.arrayHasAll = arrayHasAll;
