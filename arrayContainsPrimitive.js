"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexOfPrimitive_1 = require("@writetome51/array-get-indexes-basic/getIndexOfPrimitive");
function arrayContainsPrimitive(primitive, array) {
    var primitives = ['number', 'string', 'boolean', 'undefined'];
    // @ts-ignore
    if (!(primitives.includes(typeof primitive))) {
        throw new Error('first argument must be a primitive type.');
    }
    return (getIndexOfPrimitive_1.getIndexOfPrimitive(primitive, array) > -1);
}
exports.arrayContainsPrimitive = arrayContainsPrimitive;
