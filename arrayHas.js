"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstIndexOf_1 = require("../get/indexes/getFirstIndexOf");
// value cannot be object.
function arrayHas(value, array) {
    return (getFirstIndexOf_1.getFirstIndexOf(value, array) > -1);
}
exports.arrayHas = arrayHas;
