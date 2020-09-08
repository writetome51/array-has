import {getIndexOf} from '@writetome51/array-get-indexes-of';
import {isArray} from '@writetome51/is-array-not-array';


// This is superior to Array.includes() if `value` is an array.  This will return true if `value` 
// matches an item that is an array, even if it is not `===` to that item.

export function arrayHas(value, array) {
	if (isArray(value)) return (getIndexOf(value, array) > -1);
	else return array.includes(value);
}
