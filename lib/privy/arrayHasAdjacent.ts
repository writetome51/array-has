import { arraysMatch } from '@writetome51/arrays-match';
import { errorIfNotArray } from 'error-if-not-array';
import { getIndexesOf } from '@writetome51/array-get-indexes';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { isEmpty } from '@writetome51/is-empty-not-empty';


// Checks if array contains adjacent values anywhere inside it.
// values cannot contain object.

export function arrayHasAdjacent(values: any[], array): boolean {
	errorIfNotArray(values);
	if (isEmpty(values)) return false;
	let indexes = getIndexesOf(values[0], array);
	let i = -1;
	while (++i < indexes.length) {
		if (indexes[i] + values.length > array.length) return false;
		let adjacentItems = getAdjacentAt(indexes[i], values.length, array);
		if (arraysMatch(values, adjacentItems)) return true;
	}
	return false;
}
