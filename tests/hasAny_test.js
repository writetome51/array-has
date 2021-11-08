import { arrayHasAny } from '../privy/arrayHasAny.js';

// Test 1: Make sure it returns false when it doesn't have any of the requested items:
let arr = [1, 2, 3, '', 'abc', true, false];
if (arrayHasAny(['b', 50, 10], arr)) console.log('test 1 FAILED');
else console.log('test 1 passed');


// Test 2: Make sure it returns true when it has at least 1 of the requested items:
arr = [1, 2, 3, '', 'abc', true, false];
if (arrayHasAny(['abc', 20, 50], arr)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: Make sure it can match arrays:
arr = [3, '', 'abc', true, false, 2.056, [1, 2]];
if (arrayHasAny([100, [1, 2]], arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: Make sure it returns true when it does have all the requested values:
arr = [1, 2, 3, '', 'abc', true, false, 2.056, [1]];
if (arrayHasAny([2.056, 'abc', true, [1]], arr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure it can spot slight differences:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', 1.05555];
if (arrayHasAny(['xdfhT!@#$%^&*(_', 100], arr)) {
    console.log('test 5 FAILED');
}
else console.log('test 5 passed');



// Test 7: If first arg is not array, it triggers error:
let errorTriggered = false;
try {
    arrayHasAny('hello!!!', [1, 2, 3, 4]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
