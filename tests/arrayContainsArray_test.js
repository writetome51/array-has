"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayContainsArray_1 = require("../arrayContainsArray");
var arrayToSearchFor = [];
var arrayToSearchInside = [1, true, '', {}, 3.4, [], false];
// Test 1: Make sure it can find an empty array:
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 1' +
        ' passed');
else
    console.log('test 1 failed');
// Test 2: Make sure it can see the difference between empty and not-empty arrays:
arrayToSearchFor = [''];
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 2' +
        ' failed');
else
    console.log('test 2 passed');
// Test 3: Make sure it can spot matching populated arrays:
arrayToSearchInside = [1, true, '', {}, 3.4, [''], false];
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 3' +
        ' passed');
else
    console.log('test 3 failed');
// Test 4: Make sure it can spot matching longer-populated arrays:
arrayToSearchInside = [1, true, '', {}, 3.4, ['', 1, true, false, '400'], false];
arrayToSearchFor = ['', 1, true, false, '400'];
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 4' +
        ' passed');
else
    console.log('test 4 failed');
// Test 5: Make sure it can spot differences between longer-populated arrays:
arrayToSearchFor = ['', 1, true, false, '200'];
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 5' +
        ' failed');
else
    console.log('test 5 passed');
// Test 6: Make sure it can spot matching between nested arrays:
arrayToSearchFor = ['', 1, true, [1, [1, [1, [1]]]], '200'];
arrayToSearchInside = [1, true, '', {}, ['', 1, true, [1, [1, [1, [1]]]], '200'], 'one'];
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 6' +
        ' passed');
else
    console.log('test 6 failed');
// Test 7: Make sure it can spot slight-differences between nested arrays:
arrayToSearchFor = ['', 1, true, [1, [1, [1, [0]]]], '200'];
arrayToSearchInside = [1, true, '', {}, ['', 1, true, [1, [1, [1, [1]]]], '200'], 'one'];
if (arrayContainsArray_1.arrayContainsArray(arrayToSearchFor, arrayToSearchInside))
    console.log('test 7' +
        ' failed');
else
    console.log('test 7 passed');
// Test 8: If first argument is not array, it triggers error:
var errorTriggered = false;
try {
    arrayContainsArray_1.arrayContainsArray('', []);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9: If second argument is not array, it triggers error:
errorTriggered = false;
try {
    arrayContainsArray_1.arrayContainsArray([], '');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
