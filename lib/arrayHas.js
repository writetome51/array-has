"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// value cannot be object.
function arrayHas(value, array) {
    errorIfNotArray_1.errorIfNotArray(array);
    return (array.length > 0 && (array_get_indexes_basic_1.getFirstIndexOf(value, array) > -1));
}
exports.arrayHas = arrayHas;
