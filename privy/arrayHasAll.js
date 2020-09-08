import {arrayHas} from './arrayHas.js';
import {errorIfNotArray} from 'error-if-not-array';
import {isEmpty} from '@writetome51/is-empty-not-empty';


export function arrayHasAll(values, array) {
	errorIfNotArray(values);
	if (isEmpty(values)) return false;

	for (let i = 0, length = values.length;  i < length;  ++i) {
		if (!(arrayHas(values[i], array))) return false;
	}
	return true;
}
