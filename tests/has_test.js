import {has} from '../privy/has.js';

// Test 2: Make sure it returns false when it doesn't have the requested value:
let arr = [1, 2, 3];
if (has(4, arr)) console.log('test 2 FAILED');
else console.log('test 2 passed');


// Test 3: Make sure it returns true when it does have requested value:
arr = [1, 2, 3, 4];
if (has(4, arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 3A: Make sure it can find an identical object with same memory reference:
let obj = {prop: {name: 'steve'}};
arr = [1, 2, 3, 4, obj];
if (has(obj, arr)) console.log('test 3A passed');
else console.log('test 3A FAILED');

// Test 3B: Make sure it can find an identical object inside nested array:
obj = {prop: {name: 'steve'}};
arr = [1, 2, 3, 4, [obj]];
if (has([obj], arr)) console.log('test 3B passed');
else console.log('test 3B FAILED');


// Test 4: Make sure it can find both primitives and arrays:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05]];
let results = [], i = -1;
while (++i < arr.length) {
	results.push(has(arr[i], arr));
}
if (results.length === arr.length && !results.includes(false) && !results.includes(undefined)) {
	console.log('test 4 passed');
} else console.log('test 4 FAILED');


// Test 5: Make sure it can spot slight differences:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05555]];
if (has([1.0555], arr)) console.log('test 5 FAILED');
else console.log('test 5 passed');


let errTriggered = false;
try {
	console.log(has(undefined, false));
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 6A passed');
else console.log('test 6A FAILED');



let nums = [1, 2, 3, 4];
arr = [1, 2, 3, 4, nums];

let ms = Date.now();
for (let i=0; i<5000000; ++i) var result = has(nums, arr);
console.log(Date.now() - ms, ' ' + result);


ms = Date.now();
for (let i=0; i<5000000; ++i) result = arr.includes(nums);
console.log(Date.now() - ms, ' ' + result);
