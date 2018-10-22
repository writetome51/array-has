"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
// value cannot be object.
function arrayHas(value, array) {
    return (array_get_indexes_basic_1.getFirstIndexOf(value, array) > -1);
}
exports.arrayHas = arrayHas;
