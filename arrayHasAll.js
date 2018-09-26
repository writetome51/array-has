"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var arrayHas_1 = require("./arrayHas");
// values cannot contain object.
function arrayHasAll(values, array) {
    errorIfNotArray_1.errorIfNotArray(values);
    var i = -1;
    while (++i < values.length) {
        if (!(arrayHas_1.arrayHas(values[i], array)))
            return false;
    }
    return true;
}
exports.arrayHasAll = arrayHasAll;
