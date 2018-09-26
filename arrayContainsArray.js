"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var getFirstIndexOfArray_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOfArray");
// If arrayToSearchFor contains an object, this will return false.
function arrayContainsArray(arrayToSearchFor, array) {
    errorIfNotArray_1.errorIfNotArray(arrayToSearchFor);
    return (getFirstIndexOfArray_1.getFirstIndexOfArray(arrayToSearchFor, array) > -1);
}
exports.arrayContainsArray = arrayContainsArray;
