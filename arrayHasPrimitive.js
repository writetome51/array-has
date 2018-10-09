"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexOfPrimitive_1 = require("@writetome51/array-get-indexes-basic/getIndexOfPrimitive");
var errorIfNotPrimitive_1 = require("basic-data-handling/errorIfNotPrimitive");
function arrayHasPrimitive(primitive, array) {
    errorIfNotPrimitive_1.errorIfNotPrimitive(primitive);
    return (getIndexOfPrimitive_1.getIndexOfPrimitive(primitive, array) > -1);
}
exports.arrayHasPrimitive = arrayHasPrimitive;
