import { getIndexOf } from '@writetome51/array-get-indexes-of';
// This is superior to Array.includes() if `value` is an array.
export function arrayHas(value, array) {
    return (array.length > 0 && (getIndexOf(value, array) > -1));
}
