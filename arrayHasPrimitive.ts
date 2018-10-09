import { getIndexOfPrimitive } from '@writetome51/array-get-indexes-basic/getIndexOfPrimitive';
import { errorIfNotPrimitive } from 'basic-data-handling/errorIfNotPrimitive';


export function arrayHasPrimitive(primitive, array): boolean {
	errorIfNotPrimitive(primitive);
	return (getIndexOfPrimitive(primitive, array) > -1);
}
