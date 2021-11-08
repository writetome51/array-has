import {has} from './has.js';


export const hasAny = (values, array) => {
	for (let i = 0, length = values.length;  i < length; ++i) {
		if (has(values[i], array)) return true;
	}
	return false;
}
