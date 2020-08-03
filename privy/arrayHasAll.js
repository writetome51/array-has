import {arrayHas} from './arrayHas.js';
import {errorIfNotArray} from 'error-if-not-array';
import {isEmpty} from '@writetome51/is-empty-not-empty';


export function arrayHasAll(values, array) {
	errorIfNotArray(values);
	if (isEmpty(values)) return false;

	let i = -1;
	while (++i < values.length) {
		if (!(arrayHas(values[i], array))) return false;
	}
	return true;
}
