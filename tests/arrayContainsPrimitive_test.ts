import { arrayHasPrimitive } from '../arrayHasPrimitive';


let primitives = [1.01, 1000, 'h', false, 'blah'];


// Test 1: Make sure it can find all kinds of primitive. Should return true for each
// iteration:
let i = -1, results = [];
while (++i < primitives.length) {
	results.push(arrayHasPrimitive(primitives[i], primitives));
}
if (results.length === primitives.length && !results.includes(false) && !results.includes(undefined)) {
	console.log('test 1 passed');
}
else console.log('test 1 failed');


// Test 2: Make sure it always returns false when primitive not found.  Should return
// false for each iteration:
let arrayToSearch = [{}, [], 1, true, '', '123'];
i = -1;
results = [];
while (++i < primitives.length) {
	results.push(arrayHasPrimitive(primitives[i], arrayToSearch));
}
if (results.length === primitives.length && !results.includes(true) && !results.includes(undefined)) {
	console.log('test 2 passed');
}
else console.log('test 2 failed');


// Test 3: if first argument is not primitive, it triggers error:
let errorTriggered = false;
try {
	arrayHasPrimitive([], arrayToSearch);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: if second argument is not array, it triggers error:
errorTriggered = false;
try {
	arrayHasPrimitive(1, 'blahblah');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed');