import {has} from './has.js';
import {isEmpty} from '@writetome51/is-empty-not-empty';
import {not} from '@writetome51/not';


export const hasAll = (values, array) => {
	if (isEmpty(values)) return false;

	for (let i = 0, length = values.length;  i < length;  ++i) {
		if (not(has(values[i], array))) return false;
	}
	return true;
}
