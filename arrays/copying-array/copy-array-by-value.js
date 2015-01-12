var array1 = [0, 1];
var array2 = array1;
array2.push(2); // both array1 and array2 reference to the same array obj

console.log(["array1: ",array1].join(" ")); // 0,1,2
console.log(["array2: ",array2].join(" ")); // 0,1,2
console.log(["array1===array2: ",(array2===array1)].join(" "));  // true


var arrayA = [0, 1];
var arrayB = arrayA.slice(0);   // slice recreate a new array object
arrayB.push(2); // both arrayA and arrayA reference to different array obj

console.log(["arrayA: ",arrayA].join(" ")); // 0,1
console.log(["arrayB: ",arrayB].join(" ")); // 0,1,2
console.log(["arrayA===arrayB: ",(arrayA===arrayB)].join(" "));  // false


/*
[!] The above mentioned methods work well when working with simple
data types like number or string, but when the array contains other
objects these methods fail. When we try to pass any object from one
array to another it is passed as a reference not the object.

from http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript
*/
