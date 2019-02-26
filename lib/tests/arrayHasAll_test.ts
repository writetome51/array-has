import { arrayHasAll } from '../privy/arrayHasAll';


// Test 1: Make sure it returns false when it doesn't have any of the requested items:
let arr: any[] = [1, 2, 3, '', 'abc', true, false];
if (arrayHasAll(['b', 50, 10], arr)) console.log('test 1 FAILED');
else console.log('test 1 passed');


// Test 2: Make sure it returns false when it has some but not all the requested items:
arr = [1, 2, 3, '', 'abc', true, false];
if (arrayHasAll(['', 2, 50], arr)) console.log('test 2 FAILED');
else console.log('test 2 passed');


// Test 3: Make sure it returns true when it does have all the requested values:
arr = [1, 2, 3, '', 'abc', true, false, 2.056, [1]];
if (arrayHasAll([1, '', true], arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: Make sure it returns true when it does have all the requested values:
arr = [1, 2, 3, '', 'abc', true, false, 2.056, [1]];
if (arrayHasAll([2.056, 'abc', true, [1]], arr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure it can spot slight differences:
arr = [1.05, 10, true, false, 'xdfhT!@#$%^&*()', [1.05555]];
if (arrayHasAll([1.05, true, 'xdfhT!@#$%^&*()', [1.05556]], arr)) {
	console.log('test 5 FAILED');
}
else console.log('test 5 passed');


// Test 6: If second argument is not array, it triggers error:
let errorTriggered = false;
try {
	arrayHasAll([1, 2, 3], 'hello!!!!');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');
