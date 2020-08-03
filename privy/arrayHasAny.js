import {arrayHas} from './arrayHas.js';
import {errorIfNotArray} from 'error-if-not-array';


export function arrayHasAny(values, array) {
	errorIfNotArray(values);

	let i = -1;
	while (++i < values.length) {
		if (arrayHas(values[i], array)) return true;
	}
	return false;
}
