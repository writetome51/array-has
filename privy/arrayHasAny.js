import {arrayHas} from './arrayHas.js';
import {errorIfNotArray} from 'error-if-not-array';


export function arrayHasAny(values, array) {
	errorIfNotArray(values);

	for (let i = 0, length = values.length;  i < length; ++i) {
		if (arrayHas(values[i], array)) return true;
	}
	return false;
}
