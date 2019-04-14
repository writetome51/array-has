"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var error_if_not_array_1 = require("error-if-not-array");
// value cannot be object.
function arrayHas(value, array) {
    error_if_not_array_1.errorIfNotArray(array);
    return (array.length > 0 && (array_get_indexes_1.getFirstIndexOf(value, array) > -1));
}
exports.arrayHas = arrayHas;
