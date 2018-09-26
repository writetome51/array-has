"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstIndexOfArray_1 = require("../get/indexes/getFirstIndexOfArray");
// If arrayToSearchFor contains an object, this will return false.
function arrayContainsArray(arrayToSearchFor, array) {
    return (getFirstIndexOfArray_1.getFirstIndexOfArray(arrayToSearchFor, array) > -1);
}
exports.arrayContainsArray = arrayContainsArray;
