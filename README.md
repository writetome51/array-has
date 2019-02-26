# arrayHas(value, array): boolean

Returns true if `value` is found in `array`.

# arrayHasAll(values, array): boolean

Returns true if all `values` are found in `array`.

# arrayHasAny(values, array): boolean

Returns true if at least 1 value in `values` is found in `array`.

# arrayHasAdjacent(values, array): boolean

Returns true if `array` contains exact sequence of `values`.


## Installation
`npm i  @writetome51/array-has`


## Loading
```
// if using TypeScript:
import {arrayHas, arrayHasAll, arrayHasAny, arrayHasAdjacent} from '@writetome51/array-has';

// if using ES5 JavaScript:
var arrayHas = require('@writetome51/array-has').arrayHas;
var arrayHasAll = require('@writetome51/array-has').arrayHasAll;
var arrayHasAny = require('@writetome51/array-has').arrayHasAny;
var arrayHasAdjacent = require('@writetome51/array-has').arrayHasAdjacent;
```