import {isMatch} from '@writetome51/is-match';
import {not} from '@writetome51/not';
import {getIndexesOf} from '@writetome51/array-get-indexes-of';
import {isEmpty} from '@writetome51/is-empty-not-empty';


// Checks if array contains adjacent `values` anywhere inside it.

export const hasAdjacent = (values, array) => {
	
	if (isEmpty(values)) return false;
	let indexesOfFirstValue = getIndexesOf(values[0], array);
	const numValues = values.length;

	for (
		let i = 0, numIndexes = indexesOfFirstValue.length, arrLength = array.length; 
	 	i < numIndexes;  
		++i
	) {
		if ((indexesOfFirstValue[i] + numValues) > arrLength) return false;
		if (foundMatch(indexesOfFirstValue[i])) return true;
	}
	return false;


	function foundMatch(indexOfFirstValue) { 
		for (var v = 1; v < numValues; ++v) {  // skips first item in `values`.
			
			let value = values[v], arrItem = array[indexOfFirstValue + v];
			if (not( isMatch(value, arrItem) )) return false;
		}
		return true; 
	}
}
