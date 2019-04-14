import { errorIfNotArray } from 'error-if-not-array';
import { arrayHas } from './arrayHas';


// values cannot contain object.

export function arrayHasAny(values: any[], array): boolean {
	errorIfNotArray(values);
	let i = -1;
	while (++i < values.length) {
		if (arrayHas(values[i], array)) return true;
	}
	return false;
}