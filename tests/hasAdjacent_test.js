import {hasAdjacent} from '../privy/hasAdjacent.js';


let arr = [];

// Test 1: Make sure it returns false when array and adjacent items to search for are
// empty:
if (hasAdjacent([], arr)) console.log('test 1 FAILED');
else console.log('test 1 passed');


// Test 2: Make sure it returns false when array has values but not the exact
// requested adjacent items:
arr = [1, 2, 3];
if (hasAdjacent([2, 3, 4], arr)) console.log('test 2 FAILED');
else console.log('test 2 passed');


// Test 3: Make sure it returns true when it does have requested values:
let obj = {prop: {name: 'steve'}};
arr = [1, 2, 3, 1, 2, 3, [obj], 5];
if (hasAdjacent([1, 2, 3, [obj]], arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: Make sure it can find both primitives and arrays:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05]];
if (hasAdjacent([true, false, 'xdfhT!@#$%^&*()', [1.05]], arr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure it can spot slight differences:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05555]];
if (hasAdjacent(['xdfhT!@#$%^&*()', [1.0555]], arr)) console.log('test 5 FAILED');
else console.log('test 5 passed');


// Test 6:
arr = [1.05, 10, true, false, 1, 'xdfhT!@#$%^&*()', 1, 2, 2, 'xdfhT!@#$%^&*()', 1, 2];
if (hasAdjacent([1, 2, 'xdfhT!@#$%^&*()'], arr)) console.log('test 6 FAILED');
else console.log('test 6 passed');


// Test 7:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', 1, 2, 3, 4];
if (hasAdjacent([true], arr)) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: If second argument is not array, it triggers error:
let errorTriggered = false;
try {
	hasAdjacent([1, 2], '');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');



// Test 10: Make sure it returns false when array has values but not the exact
// requested adjacent items:
arr = [1, 2, 3];
if (hasAdjacent([6, 1], arr)) console.log('test 10 FAILED');
else console.log('test 10 passed');
