import { getIndexOfPrimitive } from '@writetome51/array-get-indexes-basic/getIndexOfPrimitive';


export function arrayContainsPrimitive(primitive, array): boolean {
	let primitives = ['number', 'string', 'boolean', 'undefined'];
	// @ts-ignore
	if (!(primitives.includes(typeof primitive))) {
		throw new Error('first argument must be a primitive type.');
	}
	return (getIndexOfPrimitive(primitive, array) > -1);
}
