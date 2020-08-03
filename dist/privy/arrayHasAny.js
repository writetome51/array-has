import { isEmpty } from '@writetome51/is-empty-not-empty';
import { arrayHas } from './arrayHas';
// values cannot contain object.
export function arrayHasAny(values, array) {
    if (isEmpty(values))
        return false;
    let i = -1;
    while (++i < values.length) {
        if (arrayHas(values[i], array))
            return true;
    }
    return false;
}
