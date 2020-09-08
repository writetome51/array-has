import {arraysMatch} from '@writetome51/arrays-match';
import {errorIfNotArray} from 'error-if-not-array';
import {getIndexesOf} from '@writetome51/array-get-indexes-of';
import {getAdjacentAt} from '@writetome51/array-get-adjacent-at';
import {isEmpty} from '@writetome51/is-empty-not-empty';


// Checks if array contains adjacent `values` anywhere inside it.

export function arrayHasAdjacent(values, array) {
	errorIfNotArray(values);
	if (isEmpty(values)) return false;
	let indexes = getIndexesOf(values[0], array);

	for (
		let i = 0, length = indexes.length, valuesLength = values.length, arrLength = array.length; 
	 	i < length;  ++i
	) {
		if ((indexes[i] + valuesLength) > arrLength) return false;

		let adjacentItems = getAdjacentAt(indexes[i], valuesLength, array);
		if (arraysMatch(values, adjacentItems)) return true;
	}
	return false;
}
