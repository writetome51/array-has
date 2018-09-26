import { arrayHas } from './arrayHas';

// values cannot contain object.

export function arrayHasAny(values: any[], array): boolean {
	let i = -1;
	while (++i < values.length) {
		if (arrayHas(values[i], array)) return true;
	}
	return false;
}