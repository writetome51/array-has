import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic/getFirstIndexOf';


// value cannot be object.

export function arrayHas(value, array): boolean {
	return (getFirstIndexOf(value, array) > -1);
}
