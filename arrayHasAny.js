"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayHas_1 = require("./arrayHas");
// values cannot contain object.
function arrayHasAny(values, array) {
    var i = -1;
    while (++i < values.length) {
        if (arrayHas_1.arrayHas(values[i], array))
            return true;
    }
    return false;
}
exports.arrayHasAny = arrayHasAny;
