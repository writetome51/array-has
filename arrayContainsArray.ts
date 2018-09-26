import { getFirstIndexOfArray } from '@writetome51/array-get-indexes-basic/getFirstIndexOfArray';


// If arrayToSearchFor contains an object, this will return false.

export function arrayContainsArray(arrayToSearchFor, array): boolean {
	return (getFirstIndexOfArray(arrayToSearchFor, array) > -1);
}