# arrayHas(value, array): boolean

Returns true if `value` is found in `array`.

# arrayHasAll(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): boolean

Returns true if all `values` are found in `array`.

# arrayHasAny(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): boolean

Returns true if at least 1 value in `values` is found in `array`.

# arrayHasAdjacent(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): boolean

Returns true if `array` contains exact sequence of `values`.


## Examples
```js
arrayHas(
    [2,3],
    [1, [2,3], 4, 5]
);
// --> true

arrayHas(
    [2,3],
    [1, 2, 3, 4, 5]
);
// --> false

arrayHasAdjacent(
    [true, false, true],
    [true, true, false, true, false]
);
// --> true

arrayHasAdjacent(
    ['a','b','c'],
    ['a','b','d','c']
);
// --> false

arrayHasAny(
    ['d', 'a'], 
    ['a', 'bb', 'c', 'cc']
);
// --> true

arrayHasAny(
    ['d', 'a'], 
    ['aaa', 'bb', 'c', 'cc']
);
// --> false


arrayHasAll(
    [1, 3, 5],
    [1, 2, 3, 4, 5, 6, 7]
);
// --> true

arrayHasAll(
    [1, 3, 5],
    [1, 2, 3, 4, 6, 7]
);
// --> false
```


## Installation
`npm i  @writetome51/array-has`


## Loading
```js
import {arrayHas, arrayHasAll, arrayHasAny, arrayHasAdjacent} 
    from '@writetome51/array-has';
```
