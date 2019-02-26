"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
var arrays_match_1 = require("@writetome51/arrays-match");
// Checks if array contains adjacent values anywhere inside it.
// values cannot contain object.
function arrayHasAdjacent(values, array) {
    errorIfNotArray_1.errorIfNotArray(values);
    if (isEmpty_notEmpty_1.isEmpty(values))
        return false;
    var indexes = array_get_indexes_1.getIndexesOf(values[0], array);
    var i = -1;
    while (++i < indexes.length) {
        if (indexes[i] + values.length > array.length)
            return false;
        var adjacentItems = array_get_adjacent_at_1.getAdjacentAt(indexes[i], values.length, array);
        if (arrays_match_1.arraysMatch(values, adjacentItems))
            return true;
    }
    return false;
}
exports.arrayHasAdjacent = arrayHasAdjacent;
