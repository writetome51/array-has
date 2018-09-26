import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray';
import { arrayHas } from './arrayHas';

// values cannot contain object.

export function arrayHasAll(values: any[], array): boolean {
	errorIfNotArray(values);
	let i = -1;
	while (++i < values.length) {
		if (!(arrayHas(values[i], array))) return false;
	}
	return true;
}