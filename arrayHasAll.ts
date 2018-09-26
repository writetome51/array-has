import { arrayHas } from './arrayHas';

// values cannot contain object.

export function arrayHasAll(values: any[], array): boolean {
	let i = -1;
	while (++i < values.length) {
		if (!(arrayHas(values[i], array))) return false;
	}
	return true;
}