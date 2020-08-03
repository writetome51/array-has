import {arrayHas} from '../privy/arrayHas.js';

// Test 2: Make sure it returns false when it doesn't have the requested value:
let arr = [1, 2, 3];
if (arrayHas(4, arr)) console.log('test 2 FAILED');
else console.log('test 2 passed');


// Test 3: Make sure it returns true when it does have requested value:
arr = [1, 2, 3, 4];
if (arrayHas(4, arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 3A: Make sure it can find an identical object with same memory reference:
let obj = {prop: {name: 'steve'}};
arr = [1, 2, 3, 4, obj];
if (arrayHas(obj, arr)) console.log('test 3A passed');
else console.log('test 3A FAILED');

// Test 3B: Make sure it can find an identical object inside nested array:
obj = {prop: {name: 'steve'}};
arr = [1, 2, 3, 4, [obj]];
if (arrayHas([obj], arr)) console.log('test 3B passed');
else console.log('test 3B FAILED');


// Test 4: Make sure it can find both primitives and arrays:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05]];
let results = [], i = -1;
while (++i < arr.length) {
	results.push(arrayHas(arr[i], arr));
}
if (results.length === arr.length && !results.includes(false) && !results.includes(undefined)) {
	console.log('test 4 passed');
} else console.log('test 4 FAILED');


// Test 5: Make sure it can spot slight differences:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05555]];
if (arrayHas([1.0555], arr)) console.log('test 5 FAILED');
else console.log('test 5 passed');


// Test 6: Make sure it doesn't return true if second arg is empty string:
if (arrayHas('', '')) console.log('test 6 FAILED');
else console.log('test 6 passed');


// Test 6A: Make sure it errors if second arg is string with length:
let errTriggered = false;
try {
	arrayHas('a', 'a');
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 6A passed');
else console.log('test 6A FAILED');
