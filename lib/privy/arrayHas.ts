import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';


// value cannot be object.

export function arrayHas(value, array): boolean {
	errorIfNotArray(array);
	return (array.length > 0 && (getFirstIndexOf(value, array) > -1));
}
