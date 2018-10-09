import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { getFirstIndexOfArray } from '@writetome51/array-get-indexes-basic/getFirstIndexOfArray';


// If arrayToSearchFor contains an object, this will return false.

export function arrayHasArray(arrayToSearchFor, array): boolean {
	errorIfNotArray(arrayToSearchFor);
	return (getFirstIndexOfArray(arrayToSearchFor, array) > -1);
}