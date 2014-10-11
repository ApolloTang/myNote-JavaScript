function compare(value1, value2) {
	console.log('in compare:', value1, value2);
	return value2 - value1;
}

var array2sort = [0, 5, 1, 10, 15,1];
var arraySortedDecend = array2sort.slice(0).sort(compare);  // need to clone a copy of obj w slice()
var arraySortedAcend = arraySortedDecend.slice(0).reverse();  // need to clone a copy of obj w slice()
console.log(["array2sort",array2sort].join(" "));
console.log(["arraySortedDecend",arraySortedDecend].join(" "));
console.log(["arraySortedAcend",arraySortedAcend].join(" "));


/*
[0, 5, 1, 10, 15,1]
 ^  ^
 ^     ^
    ^  ^
 ^         ^
       ^   ^
 ^             ^
    ^          ^ 
*/