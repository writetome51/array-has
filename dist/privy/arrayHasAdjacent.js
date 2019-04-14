"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var error_if_not_array_1 = require("error-if-not-array");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
// Checks if array contains adjacent values anywhere inside it.
// values cannot contain object.
function arrayHasAdjacent(values, array) {
    error_if_not_array_1.errorIfNotArray(values);
    if (is_empty_not_empty_1.isEmpty(values))
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
