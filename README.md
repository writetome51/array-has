# has(value, array): boolean

Returns true if `value` is found in `array`.

# hasAll(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): boolean

Returns true if all `values` are found in `array`.

# hasAny(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): boolean

Returns true if at least 1 value in `values` is found in `array`.

# hasAdjacent(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): boolean

Returns true if `array` contains exact sequence of `values`.


## Examples
```js
has(
    [2,3],
    [1, [2,3], 4, 5]
);
// --> true

has(
    [2,3],
    [1, 2, 3, 4, 5]
);
// --> false

hasAdjacent(
    [true, false, true],
    [true, true, false, true, false]
);
// --> true

hasAdjacent(
    ['a','b','c'],
    ['a','b','d','c']
);
// --> false

hasAny(
    ['d', 'a'], 
    ['a', 'bb', 'c', 'cc']
);
// --> true

hasAny(
    ['d', 'a'], 
    ['aaa', 'bb', 'c', 'cc']
);
// --> false


hasAll(
    [1, 3, 5],
    [1, 2, 3, 4, 5, 6, 7]
);
// --> true

hasAll(
    [1, 3, 5],
    [1, 2, 3, 4, 6, 7]
);
// --> false
```


## Installation
`npm i  @writetome51/array-has`


## Loading
```js
import {has, hasAll, hasAny, hasAdjacent} 
    from '@writetome51/array-has';
```
